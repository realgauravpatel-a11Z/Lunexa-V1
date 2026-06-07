// ============================================================
// LUNEXA — Home page + shared card renderer
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderCategoryHighlights();
  renderNewArrivals();
  setTimeout(() => document.querySelector('.hero-content')?.classList.add('visible'), 100);
});

function renderFeaturedProducts() {
  const c = document.getElementById('featured-products');
  if (!c) return;
  const ids = [101,111,108,201,208,301,308,119];
  c.innerHTML = ids.map(id => getProductById(id)).filter(Boolean).map(p => createProductCard(p)).join('');
  Wishlist.syncAllIcons();
}

function renderCategoryHighlights() {
  const c = document.getElementById('category-grid');
  if (!c) return;
  const cats = [
    { key:'electronics', label:'Electronics', count:'20 products', image:'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80' },
    { key:'gadgets',     label:'Gadgets',     count:'15 products', image:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
    { key:'accessories', label:'Accessories', count:'15 products', image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80' }
  ];
  c.innerHTML = cats.map(cat => `
    <a href="products.html?cat=${cat.key}" class="category-card">
      <img src="${cat.image}" alt="${cat.label}" loading="lazy" />
      <div class="category-card-overlay">
        <div class="category-card-label">${cat.label}</div>
        <div class="category-card-count">${cat.count}</div>
        <span class="category-card-cta">
          Shop Now
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </a>
  `).join('');
}

function renderNewArrivals() {
  const c = document.getElementById('new-arrivals');
  if (!c) return;
  const ids = [113,209,309,214];
  c.innerHTML = ids.map(id => getProductById(id)).filter(Boolean).map(p => createProductCard(p)).join('');
  Wishlist.syncAllIcons();
}

// ── Shared product card ──────────────────────────────────
function createProductCard(product) {
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const isWished = Wishlist.has(product.id);
  return `
    <div class="product-card" onclick="goToProduct(${product.id})">
      <div class="card-image-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/fallback${product.id}/600/600'" />
        ${discount > 0 ? `<span class="card-badge-discount">−${discount}%</span>` : ''}
        <button class="card-wishlist-btn ${isWished?'active':''}" data-wishlist-id="${product.id}"
          onclick="handleWishlistToggle(event,${product.id})" title="${isWished?'Remove from Wishlist':'Add to Wishlist'}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="${isWished?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <h3 class="card-name">${product.name}</h3>
        <div class="card-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-value">${product.rating}</span>
          <span class="rating-count">(${product.reviews.toLocaleString()})</span>
        </div>
        <div class="card-pricing">
          <span class="card-price">${formatPrice(product.price)}</span>
          <span class="card-old-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <button class="card-add-btn" onclick="handleAddToCart(event,${product.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Add to Cart
        </button>
      </div>
    </div>`;
}

// ── Global handlers ──────────────────────────────────────
function goToProduct(id) { window.location.href = `product.html?id=${id}`; }

function handleAddToCart(event, productId) {
  event.stopPropagation();
  Cart.add(productId, 1);
  const btn = event.currentTarget;
  btn.classList.add('added');
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Added!`;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> Add to Cart`;
  }, 1800);
}

function handleWishlistToggle(event, productId) {
  event.stopPropagation();
  const added = Wishlist.toggle(productId);
  const svg = event.currentTarget.querySelector('svg');
  if (svg) svg.setAttribute('fill', added ? 'currentColor' : 'none');
}
