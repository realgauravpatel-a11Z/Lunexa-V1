// ============================================================
// LUNEXA — wishlist.js (user-aware, reads from Store)
// ============================================================
const Wishlist = {
  getAll()          { return Store.getWishlist(); },

  toggle(productId) {
    const id   = parseInt(productId);
    const list = this.getAll();
    const idx  = list.indexOf(id);
    if (idx === -1) { list.push(id); Store.saveWishlist(list); this.updateBadge(); this.updateHeartIcon(id, true);  return true; }
    else            { list.splice(idx,1); Store.saveWishlist(list); this.updateBadge(); this.updateHeartIcon(id, false); return false; }
  },

  has(productId)    { return this.getAll().includes(parseInt(productId)); },

  remove(productId) {
    Store.saveWishlist(this.getAll().filter(i => i !== parseInt(productId)));
    this.updateBadge();
  },

  getCount() { return this.getAll().length; },

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.wishlist-badge').forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  updateHeartIcon(productId, isActive) {
    document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(btn => {
      btn.classList.toggle('active', isActive);
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
    });
  },

  syncAllIcons() {
    const list = this.getAll();
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id       = parseInt(btn.getAttribute('data-wishlist-id'));
      const isActive = list.includes(id);
      btn.classList.toggle('active', isActive);
      const svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
    });
  },
};
