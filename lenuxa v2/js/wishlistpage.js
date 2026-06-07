// ============================================================
// WISHLIST PAGE — render all wishlisted products
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderWishlistPage();
});

function renderWishlistPage() {
  const grid  = document.getElementById('wishlist-grid');
  const empty = document.getElementById('empty-wishlist');

  if (!grid) return;

  const wishlistIds = Wishlist.getAll();

  if (wishlistIds.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }

  if (empty) empty.style.display = 'none';

  // Update count in heading
  const count = document.getElementById('wishlist-count');
  if (count) count.textContent = `${wishlistIds.length} item${wishlistIds.length !== 1 ? 's' : ''}`;

  const products = wishlistIds.map(id => getProductById(id)).filter(Boolean);

  grid.innerHTML = products.map(p => createProductCard(p)).join('');

  // Sync all heart icons (all should show active)
  Wishlist.syncAllIcons();
}

// Override wishlist toggle on wishlist page to re-render
const _originalToggle = Wishlist.toggle.bind(Wishlist);
Wishlist.toggle = function(productId) {
  const result = _originalToggle(productId);
  // Re-render wishlist page when item removed
  const grid = document.getElementById('wishlist-grid');
  if (grid) renderWishlistPage();
  return result;
};
