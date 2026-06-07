// ============================================================
// LUNEXA — cartpage.js
// ============================================================
document.addEventListener('DOMContentLoaded', renderCartPage);

function renderCartPage() {
  const items   = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  const empty   = document.getElementById('empty-cart');
  if (!items) return;

  const cartData = Cart.getAll();

  if (cartData.length === 0) {
    items.innerHTML = '';
    if (summary) summary.style.display = 'none';
    if (empty)   empty.style.display   = 'flex';
    return;
  }
  if (empty)   empty.style.display   = 'none';
  if (summary) summary.style.display = 'block';

  items.innerHTML = cartData.map(item => {
    const p = getProductById(item.productId);
    if (!p) return '';
    const lineTotal = p.price * item.quantity;
    return `
      <div class="cart-item" id="cart-item-${p.id}">
        <a href="product.html?id=${p.id}" class="cart-item-img-link">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/fb${p.id}/300/300'"/>
        </a>
        <div class="cart-item-info">
          <div class="cart-item-category">${p.category}</div>
          <a href="product.html?id=${p.id}" class="cart-item-name">${p.name}</a>
          <div class="cart-item-unit-price">${formatPrice(p.price)} each</div>
        </div>
        <div class="cart-item-controls">
          <div class="cart-qty-controls">
            <button onclick="cartChangeQty(${p.id},${item.quantity-1})" title="Decrease">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button onclick="cartChangeQty(${p.id},${item.quantity+1})" title="Increase">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
          <div class="cart-item-line-total">${formatPrice(lineTotal)}</div>
          <button class="cart-remove-btn" onclick="cartRemoveItem(${p.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            Remove
          </button>
        </div>
      </div>`;
  }).join('');

  renderCartSummary();
}

function cartChangeQty(id, qty) { Cart.updateQuantity(id, qty); renderCartPage(); }

function cartRemoveItem(id) {
  const el = document.getElementById(`cart-item-${id}`);
  if (el) {
    el.style.cssText = 'opacity:0;transform:translateX(20px);transition:all 0.25s';
    setTimeout(() => { Cart.remove(id); renderCartPage(); }, 250);
  } else { Cart.remove(id); renderCartPage(); }
}

function renderCartSummary() {
  const summary  = document.getElementById('cart-summary');
  if (!summary) return;
  const subtotal = Cart.getTotal();
  const count    = Cart.getCount();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax      = subtotal * 0.08;
  const total    = subtotal + shipping + tax;

  summary.innerHTML = `
    <h2 class="summary-title">Order Summary</h2>
    <div class="summary-lines">
      <div class="summary-line"><span>Items (${count})</span><span>${formatPrice(subtotal)}</span></div>
      <div class="summary-line"><span>Shipping</span><span>${shipping===0?'<span class="free-label">FREE</span>':formatPrice(shipping)}</span></div>
      <div class="summary-line"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
    </div>
    ${shipping>0 ? `<div class="free-ship-notice">Add ${formatPrice(100-subtotal)} more for free shipping!</div>` : ''}
    <div class="summary-divider"></div>
    <div class="summary-total-line"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    <a href="checkout.html" class="btn-checkout">
      Proceed to Checkout
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
    </a>
    <a href="products.html" class="btn-continue-shopping">Continue Shopping</a>
    <div class="cart-trust">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <span>SSL Encrypted · Secure Checkout</span>
    </div>`;
}
