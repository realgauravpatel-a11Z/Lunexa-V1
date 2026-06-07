// ============================================================
// LUNEXA — storage.js
// Centralized LocalStorage manager with user-based isolation
// ============================================================

const KEYS = {
  USERS:          'lunexa_users',
  CURRENT_USER:   'lunexa_current_user',
  CART:           uid => `lunexa_cart_${uid || 'guest'}`,
  WISHLIST:       uid => `lunexa_wishlist_${uid || 'guest'}`,
  ORDERS:         uid => `lunexa_orders_${uid || 'guest'}`,
  PRODUCTS:       'lunexa_products_override',
  COOKIE_CONSENT: 'lunexa_cookie_consent',
  ADMIN_AUTH:     'lunexa_admin_session',
};

const Store = {
  // ── Generic helpers ─────────────────────────────────────
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : fallback;
    } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { return false; }
  },
  remove(key) { localStorage.removeItem(key); },

  // ── Users ───────────────────────────────────────────────
  getUsers()          { return this.get(KEYS.USERS, []); },
  saveUsers(users)    { this.set(KEYS.USERS, users); },
  getUserById(id)     { return this.getUsers().find(u => u.id === id) || null; },
  getUserByEmail(em)  { return this.getUsers().find(u => u.email.toLowerCase() === em.toLowerCase()) || null; },

  addUser(user) {
    const users = this.getUsers();
    users.push(user);
    this.saveUsers(users);
  },

  updateUser(id, updates) {
    const users = this.getUsers().map(u => u.id === id ? { ...u, ...updates } : u);
    this.saveUsers(users);
    // Refresh session if updating current user
    const current = this.getCurrentUser();
    if (current && current.id === id) {
      this.set(KEYS.CURRENT_USER, { ...current, ...updates });
    }
  },

  // ── Session ─────────────────────────────────────────────
  getCurrentUser()    { return this.get(KEYS.CURRENT_USER, null); },
  setCurrentUser(u)   { this.set(KEYS.CURRENT_USER, u); },
  clearSession()      { this.remove(KEYS.CURRENT_USER); },
  isLoggedIn()        { return this.getCurrentUser() !== null; },

  // ── Cart (user-aware) ────────────────────────────────────
  getCart(uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    return this.get(KEYS.CART(id), []);
  },
  saveCart(items, uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    this.set(KEYS.CART(id), items);
  },

  // ── Wishlist (user-aware) ────────────────────────────────
  getWishlist(uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    return this.get(KEYS.WISHLIST(id), []);
  },
  saveWishlist(ids, uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    this.set(KEYS.WISHLIST(id), ids);
  },

  // ── Orders ───────────────────────────────────────────────
  getOrders(uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    return this.get(KEYS.ORDERS(id), []);
  },
  addOrder(order, uid) {
    const id = uid || this.getCurrentUser()?.id || 'guest';
    const orders = this.getOrders(id);
    orders.unshift(order); // newest first
    this.set(KEYS.ORDERS(id), orders);
  },

  // ── Product overrides (admin) ────────────────────────────
  getProductOverrides() { return this.get(KEYS.PRODUCTS, null); },
  setProductOverrides(products) { this.set(KEYS.PRODUCTS, products); },

  // ── Cookie consent ───────────────────────────────────────
  getCookieConsent()     { return this.get(KEYS.COOKIE_CONSENT, null); },
  setCookieConsent(val)  { this.set(KEYS.COOKIE_CONSENT, val); },

  // ── Admin session ────────────────────────────────────────
  getAdminSession()      { return this.get(KEYS.ADMIN_AUTH, false); },
  setAdminSession(val)   { this.set(KEYS.ADMIN_AUTH, val); },
  clearAdminSession()    { this.remove(KEYS.ADMIN_AUTH); },
};

// ── Simple password encoder (frontend simulation) ──────────
// NOT cryptographically secure — demonstration only
const Auth = {
  encodePassword(password) {
    // Basic obfuscation for demo
    return btoa(password + '_lunexa_salt_2025');
  },
  verifyPassword(password, encoded) {
    return this.encodePassword(password) === encoded;
  },

  generateId() {
    return 'usr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  },

  generateOrderId() {
    return 'ORD-' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();
  },

  generateTrackingId() {
    return 'TRK' + Math.random().toString(36).slice(2, 10).toUpperCase();
  },

  signup(name, email, password) {
    if (Store.getUserByEmail(email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    const user = {
      id:        this.generateId(),
      name:      name.trim(),
      email:     email.trim().toLowerCase(),
      password:  this.encodePassword(password),
      address:   { street:'', city:'', state:'', zip:'', country:'US' },
      createdAt: new Date().toISOString(),
      avatar:    name.trim().charAt(0).toUpperCase(),
    };
    Store.addUser(user);
    return { success: true, user };
  },

  login(email, password) {
    const user = Store.getUserByEmail(email);
    if (!user) return { success: false, error: 'No account found with this email.' };
    if (!this.verifyPassword(password, user.password)) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }
    const session = { id: user.id, name: user.name, email: user.email, avatar: user.avatar };
    Store.setCurrentUser(session);
    return { success: true, user: session };
  },

  logout() {
    Store.clearSession();
  },
};

// ── Resolve active product list (with admin overrides) ──────
function getActiveProducts() {
  const overrides = Store.getProductOverrides();
  return overrides || PRODUCTS;
}

// Override global helpers to use active product list
function getProductById(id) {
  return getActiveProducts().find(p => p.id === parseInt(id));
}
function filterProducts(cat, query) {
  let r = getActiveProducts();
  if (cat && cat !== 'all') r = r.filter(p => p.category === cat);
  if (query) { const q = query.toLowerCase(); r = r.filter(p => p.name.toLowerCase().includes(q)); }
  return r;
}

// ── Redirect helpers ─────────────────────────────────────
function requireAuth(redirectTo = 'login.html') {
  if (!Store.isLoggedIn()) {
    window.location.href = redirectTo + '?redirect=' + encodeURIComponent(window.location.pathname + window.location.search);
    return false;
  }
  return true;
}
function redirectIfAuth(to = 'profile.html') {
  if (Store.isLoggedIn()) { window.location.href = to; return true; }
  return false;
}
