// ============================================================
// CART MODULE — localStorage-based cart management
// Stores only { productId, quantity } pairs
// ============================================================

const CART_KEY = 'luxestore_cart';

const Cart = {

  // Retrieve all cart items
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch { return []; }
  },

  // Add product to cart (increments if already exists)
  add(productId, quantity = 1) {
    const cart = this.getAll();
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId: parseInt(productId), quantity });
    }
    this._save(cart);
    this.updateBadge();
    this.showToast('Added to cart!');
  },

  // Remove a product entirely from cart
  remove(productId) {
    const cart = this.getAll().filter(item => item.productId !== parseInt(productId));
    this._save(cart);
    this.updateBadge();
  },

  // Update quantity for a product (removes if 0)
  updateQuantity(productId, quantity) {
    const qty = parseInt(quantity);
    if (qty <= 0) {
      this.remove(productId);
      return;
    }
    const cart = this.getAll();
    const item = cart.find(i => i.productId === parseInt(productId));
    if (item) {
      item.quantity = qty;
      this._save(cart);
    }
    this.updateBadge();
  },

  // Clear entire cart
  clear() {
    localStorage.removeItem(CART_KEY);
    this.updateBadge();
  },

  // Check if product is in cart
  has(productId) {
    return this.getAll().some(i => i.productId === parseInt(productId));
  },

  // Total item count (sum of quantities)
  getCount() {
    return this.getAll().reduce((sum, item) => sum + item.quantity, 0);
  },

  // Total price
  getTotal() {
    return this.getAll().reduce((sum, item) => {
      const product = getProductById(item.productId);
      return product ? sum + (product.price * item.quantity) : sum;
    }, 0);
  },

  // Save to localStorage
  _save(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  // Update all cart badge elements on page
  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  // Show a brief toast notification
  showToast(message) {
    // Remove existing toast
    const existing = document.querySelector('.cart-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 10);
    // Animate out and remove
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
};
