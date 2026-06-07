// ============================================================
// WISHLIST MODULE — localStorage-based wishlist management
// Stores array of product IDs
// ============================================================

const WISHLIST_KEY = 'luxestore_wishlist';

const Wishlist = {

  // Retrieve all wishlisted product IDs
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    } catch { return []; }
  },

  // Toggle product in/out of wishlist, returns true if added
  toggle(productId) {
    const id = parseInt(productId);
    const list = this.getAll();
    const idx = list.indexOf(id);
    if (idx === -1) {
      list.push(id);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
      this.updateBadge();
      this.updateHeartIcon(id, true);
      return true; // added
    } else {
      list.splice(idx, 1);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
      this.updateBadge();
      this.updateHeartIcon(id, false);
      return false; // removed
    }
  },

  // Check if product is wishlisted
  has(productId) {
    return this.getAll().includes(parseInt(productId));
  },

  // Remove a specific product from wishlist
  remove(productId) {
    const id = parseInt(productId);
    const list = this.getAll().filter(i => i !== id);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
    this.updateBadge();
  },

  // Count of wishlisted items
  getCount() {
    return this.getAll().length;
  },

  // Update all wishlist badge elements on page
  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.wishlist-badge').forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  // Update heart icon appearance for a given productId
  updateHeartIcon(productId, isActive) {
    document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
      btn.classList.toggle('active', isActive);
      btn.title = isActive ? 'Remove from Wishlist' : 'Add to Wishlist';
    });
  },

  // Sync all heart icons on page with current wishlist state
  syncAllIcons() {
    const list = this.getAll();
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = parseInt(btn.getAttribute('data-wishlist-id'));
      const isActive = list.includes(id);
      btn.classList.toggle('active', isActive);
      btn.title = isActive ? 'Remove from Wishlist' : 'Add to Wishlist';
    });
  }
};
