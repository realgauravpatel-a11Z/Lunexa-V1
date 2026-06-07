// ============================================================
// CART PAGE — render cart items, totals, manage quantities
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
});

function renderCartPage() {
  const container = document.getElementById('cart-items');
  const summary   = document.getElementById('cart-summary');
  const emptyCart = document.getElementById('empty-cart');

  if (!container) return;

  const cartData = Cart.getAll();

  if (cartData.length === 0) {
    container.innerHTML = '';
    if (summary)   summary.style.display   = 'none';
    if (emptyCart) emptyCart.style.display = 'flex';
    return;
  }

  if (emptyCart) emptyCart.style.display = 'none';
  if (summary)   summary.style.display   = 'block';

  // Render each cart item
  container.innerHTML = cartData.map(item => {
    const product = getProductById(item.productId);
    if (!product) return '';
    const lineTotal = product.price * item.quantity;

    return `
      <div class="cart-item" id="cart-item-${product.id}">
        <a href="product.html?id=${product.id}" class="cart-item-img-link">
          <img src="${product.image}" alt="${product.name}" />
        </a>

        <div class="cart-item-info">
          <div class="cart-item-category">${product.category}</div>
          <a href="product.html?id=${product.id}" class="cart-item-name">${product.name}</a>
          <div class="cart-item-unit-price">${formatPrice(product.price)} each</div>
        </div>

        <div class="cart-item-controls">
          <div class="cart-qty-controls">
            <button onclick="cartChangeQty(${product.id}, ${item.quantity - 1})" title="Decrease">−</button>
            <span class="cart-qty-val">${item.quantity}</span>
            <button onclick="cartChangeQty(${product.id}, ${item.quantity + 1})" title="Increase">+</button>
          </div>
          <div class="cart-item-line-total">${formatPrice(lineTotal)}</div>
          <button class="cart-remove-btn" onclick="cartRemoveItem(${product.id})" title="Remove item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
            Remove
          </button>
        </div>
      </div>
    `;
  }).join('');

  renderCartSummary();
}

// ── Change quantity for a cart item ──────────────────────
function cartChangeQty(productId, newQty) {
  Cart.updateQuantity(productId, newQty);
  renderCartPage();
}

// ── Remove item from cart ─────────────────────────────────
function cartRemoveItem(productId) {
  // Animate out then remove
  const item = document.getElementById(`cart-item-${productId}`);
  if (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(20px)';
    setTimeout(() => {
      Cart.remove(productId);
      renderCartPage();
    }, 250);
  } else {
    Cart.remove(productId);
    renderCartPage();
  }
}

// ── Render order summary panel ────────────────────────────
function renderCartSummary() {
  const summary = document.getElementById('cart-summary');
  if (!summary) return;

  const cartData   = Cart.getAll();
  const subtotal   = Cart.getTotal();
  const itemCount  = Cart.getCount();
  const shipping   = subtotal > 100 ? 0 : 9.99;
  const tax        = subtotal * 0.08;
  const total      = subtotal + shipping + tax;

  summary.innerHTML = `
    <h2 class="summary-title">Order Summary</h2>

    <div class="summary-lines">
      <div class="summary-line">
        <span>Items (${itemCount})</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <div class="summary-line">
        <span>Shipping</span>
        <span>${shipping === 0 ? '<span class="free-label">FREE</span>' : formatPrice(shipping)}</span>
      </div>
      <div class="summary-line">
        <span>Estimated Tax</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
    </div>

    ${shipping === 0 ? '' : `
      <div class="free-ship-notice">
        Add ${formatPrice(100 - subtotal)} more for <strong>free shipping!</strong>
      </div>
    `}

    <div class="summary-divider"></div>

    <div class="summary-total-line">
      <span>Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>

    <a href="checkout.html" class="btn-checkout">
      Proceed to Checkout
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
      </svg>
    </a>

    <a href="products.html" class="btn-continue-shopping">Continue Shopping</a>

    <div class="cart-trust">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <span>SSL Encrypted · Secure Checkout</span>
    </div>
  `;
}
