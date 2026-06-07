// ============================================================
// PRODUCT DETAIL PAGE — renders single product from URL ?id=
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const params  = new URLSearchParams(window.location.search);
  const id      = params.get('id');
  const product = getProductById(id);

  if (!product) {
    renderNotFound();
    return;
  }

  renderProduct(product);
  renderRelatedProducts(product);
  initImageZoom();
});

// ── Render full product details ───────────────────────────
function renderProduct(product) {
  document.title = `${product.name} — LuxeStore`;

  const container = document.getElementById('product-detail');
  if (!container) return;

  const discount   = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const isWished   = Wishlist.has(product.id);
  const isInCart   = Cart.has(product.id);

  container.innerHTML = `
    <div class="product-gallery">
      <div class="product-main-img" id="main-img-wrap">
        <img
          id="main-product-img"
          src="${product.image}"
          alt="${product.name}"
          onerror="this.src='https://picsum.photos/seed/fallback${product.id}/600/600'"
        />
        ${discount > 0 ? `<span class="detail-badge-discount">−${discount}% OFF</span>` : ''}
      </div>

      <!-- Thumbnail strip (same image, different seeds for UI demo) -->
      <div class="product-thumbs">
        ${[0,1,2,3].map(i => `
          <div
            class="thumb ${i===0?'active':''}"
            onclick="switchImage(this, 'https://picsum.photos/seed/${product.id}${String.fromCharCode(97+i)}/600/600')"
          >
            <img src="https://picsum.photos/seed/${product.id}${String.fromCharCode(97+i)}/120/120" alt="View ${i+1}" />
          </div>
        `).join('')}
      </div>
    </div>

    <div class="product-info">
      <div class="product-info-top">
        <span class="product-category-tag">${product.category}</span>
        <button
          class="detail-wishlist-btn ${isWished ? 'active' : ''}"
          data-wishlist-id="${product.id}"
          onclick="handleDetailWishlist(${product.id})"
          title="${isWished ? 'Remove from Wishlist' : 'Add to Wishlist'}"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isWished ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span>${isWished ? 'Wishlisted' : 'Add to Wishlist'}</span>
        </button>
      </div>

      <h1 class="product-title">${product.name}</h1>

      <div class="product-rating-row">
        <div class="product-stars">
          ${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 >= 0.5 ? '½' : ''}
        </div>
        <span class="product-rating-val">${product.rating}</span>
        <span class="product-reviews">${product.reviews.toLocaleString()} reviews</span>
      </div>

      <div class="product-pricing-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        <span class="product-old-price">${formatPrice(product.oldPrice)}</span>
        ${discount > 0 ? `<span class="product-savings">You save ${formatPrice(product.oldPrice - product.price)}</span>` : ''}
      </div>

      <p class="product-description">${product.description}</p>

      <!-- Specs -->
      <div class="product-specs">
        <h3>Key Specifications</h3>
        <div class="specs-grid">
          ${product.specs.map(spec => `
            <div class="spec-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>${spec}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Quantity selector -->
      <div class="product-qty-row">
        <label>Quantity</label>
        <div class="qty-controls">
          <button onclick="changeQty(-1)">−</button>
          <input type="number" id="product-qty" value="1" min="1" max="99" readonly />
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="product-actions">
        <button
          class="btn-add-cart ${isInCart ? 'in-cart' : ''}"
          id="detail-cart-btn"
          onclick="handleDetailAddToCart(${product.id})"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          ${isInCart ? 'Go to Cart' : 'Add to Cart'}
        </button>

        <a href="checkout.html" class="btn-buy-now">Buy Now</a>
      </div>

      <!-- Trust badges -->
      <div class="trust-badges">
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Secure Checkout</span>
        </div>
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
          <span>Free Shipping</span>
        </div>
        <div class="trust-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          <span>30-Day Returns</span>
        </div>
      </div>
    </div>
  `;

  Wishlist.syncAllIcons();
}

// ── Related products section ──────────────────────────────
function renderRelatedProducts(product) {
  const container = document.getElementById('related-products');
  if (!container) return;

  const related = PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  if (related.length === 0) {
    container.closest('section')?.remove();
    return;
  }

  container.innerHTML = related.map(p => createProductCard(p)).join('');
  Wishlist.syncAllIcons();
}

// ── Quantity controls ────────────────────────────────────
function changeQty(delta) {
  const input = document.getElementById('product-qty');
  if (!input) return;
  const newVal = Math.max(1, Math.min(99, parseInt(input.value) + delta));
  input.value = newVal;
}

// ── Add to cart from detail page ─────────────────────────
function handleDetailAddToCart(productId) {
  const btn = document.getElementById('detail-cart-btn');
  if (Cart.has(productId)) {
    // Already in cart → go to cart
    window.location.href = 'cart.html';
    return;
  }
  const qty = parseInt(document.getElementById('product-qty')?.value) || 1;
  Cart.add(productId, qty);
  if (btn) {
    btn.classList.add('in-cart');
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Go to Cart
    `;
    btn.onclick = () => { window.location.href = 'cart.html'; };
  }
}

// ── Wishlist on detail page ───────────────────────────────
function handleDetailWishlist(productId) {
  const added = Wishlist.toggle(productId);
  const btn = document.querySelector('.detail-wishlist-btn');
  if (!btn) return;
  const svg = btn.querySelector('svg');
  if (svg) svg.setAttribute('fill', added ? 'currentColor' : 'none');
  const label = btn.querySelector('span');
  if (label) label.textContent = added ? 'Wishlisted' : 'Add to Wishlist';
  btn.classList.toggle('active', added);
}

// ── Thumbnail switcher ────────────────────────────────────
function switchImage(thumb, src) {
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  const mainImg = document.getElementById('main-product-img');
  if (mainImg) {
    mainImg.style.opacity = '0';
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = '1';
    }, 150);
  }
}

// ── Image zoom on hover ───────────────────────────────────
function initImageZoom() {
  const wrap = document.getElementById('main-img-wrap');
  const img  = document.getElementById('main-product-img');
  if (!wrap || !img) return;

  wrap.addEventListener('mousemove', (e) => {
    const rect  = wrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width)  * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(1.35)';
  });

  wrap.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  });
}

// ── 404 state ────────────────────────────────────────────
function renderNotFound() {
  const container = document.getElementById('product-detail');
  if (container) {
    container.innerHTML = `
      <div class="not-found-state">
        <div class="not-found-icon">🔍</div>
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or may have been removed.</p>
        <a href="products.html" class="btn-back">Browse All Products</a>
      </div>
    `;
  }
}
