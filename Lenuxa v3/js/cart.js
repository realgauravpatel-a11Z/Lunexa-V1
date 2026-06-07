// ============================================================
// LUNEXA — cart.js (user-aware, reads from Store)
// ============================================================
const Cart = {
  getAll() { return Store.getCart(); },

  add(productId, quantity = 1) {
    const cart = this.getAll();
    const ex   = cart.find(i => i.productId === parseInt(productId));
    if (ex) ex.quantity += quantity;
    else cart.push({ productId: parseInt(productId), quantity });
    Store.saveCart(cart);
    this.updateBadge();
    this.showToast('Added to cart!');
  },

  remove(productId) {
    Store.saveCart(this.getAll().filter(i => i.productId !== parseInt(productId)));
    this.updateBadge();
  },

  updateQuantity(productId, quantity) {
    const qty = parseInt(quantity);
    if (qty <= 0) { this.remove(productId); return; }
    const cart = this.getAll();
    const item = cart.find(i => i.productId === parseInt(productId));
    if (item) { item.quantity = qty; Store.saveCart(cart); }
    this.updateBadge();
  },

  clear() { Store.saveCart([]); this.updateBadge(); },

  has(productId) { return this.getAll().some(i => i.productId === parseInt(productId)); },

  getCount() { return this.getAll().reduce((s, i) => s + i.quantity, 0); },

  getTotal() {
    return this.getAll().reduce((s, i) => {
      const p = getProductById(i.productId);
      return p ? s + (p.price * i.quantity) : s;
    }, 0);
  },

  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-badge').forEach(b => {
      b.textContent = count;
      b.style.display = count > 0 ? 'flex' : 'none';
    });
  },

  showToast(msg) {
    document.querySelector('.cart-toast')?.remove();
    const t = document.createElement('div');
    t.className = 'cart-toast';
    t.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
    document.body.appendChild(t);
    setTimeout(() => t.classList.add('show'), 10);
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
  },
};
