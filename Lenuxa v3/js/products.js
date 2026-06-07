// ============================================================
// LUNEXA — products.js  (listing, filter, real-time search)
// ============================================================

let currentCategory = 'all';
let currentSearch   = '';

document.addEventListener('DOMContentLoaded', () => {
  readURLParams();
  renderFilterBar();
  renderProducts();
  bindSearchBar();
});

function readURLParams() {
  const params = new URLSearchParams(window.location.search);
  currentCategory = params.get('cat')    || 'all';
  currentSearch   = params.get('search') || '';

  const searchInput = document.getElementById('products-search');
  if (searchInput && currentSearch) {
    searchInput.value = currentSearch;
    const clearBtn = document.getElementById('search-clear');
    if (clearBtn) clearBtn.style.display = 'flex';
  }

  const heading = document.getElementById('products-heading');
  if (heading) {
    if (currentSearch) heading.textContent = `Results for "${currentSearch}"`;
    else if (currentCategory !== 'all') heading.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    else heading.textContent = 'All Products';
  }
}

function renderFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;
  const filters = [
    { key:'all',         label:'All Products' },
    { key:'electronics', label:'Electronics'  },
    { key:'gadgets',     label:'Gadgets'      },
    { key:'accessories', label:'Accessories'  }
  ];
  bar.innerHTML = filters.map(f => `
    <button class="filter-btn ${currentCategory === f.key ? 'active' : ''}"
      data-cat="${f.key}" onclick="setCategory('${f.key}')">
      ${f.label}
    </button>
  `).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
  });
  renderProducts();
  const url = new URL(window.location);
  if (cat === 'all') url.searchParams.delete('cat');
  else               url.searchParams.set('cat', cat);
  window.history.replaceState({}, '', url);

  // Update heading
  const heading = document.getElementById('products-heading');
  if (heading) {
    if (currentSearch)        heading.textContent = `Results for "${currentSearch}"`;
    else if (cat !== 'all')   heading.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    else                      heading.textContent = 'All Products';
  }
}

function bindSearchBar() {
  const input    = document.getElementById('products-search');
  const clearBtn = document.getElementById('search-clear');
  if (!input) return;

  input.addEventListener('input', () => {
    currentSearch = input.value.trim();
    if (clearBtn) clearBtn.style.display = currentSearch ? 'flex' : 'none';
    renderProducts();

    const heading = document.getElementById('products-heading');
    if (heading) {
      if (currentSearch)                heading.textContent = `Results for "${currentSearch}"`;
      else if (currentCategory !== 'all') heading.textContent = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
      else                              heading.textContent = 'All Products';
    }

    const url = new URL(window.location);
    if (currentSearch) url.searchParams.set('search', currentSearch);
    else               url.searchParams.delete('search');
    window.history.replaceState({}, '', url);
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      input.value = '';
      currentSearch = '';
      if (clearBtn) clearBtn.style.display = 'none';
      renderProducts();
    }
  });
}

function renderProducts() {
  const grid  = document.getElementById('products-grid');
  const empty = document.getElementById('empty-state');
  if (!grid) return;

  const results = filterProducts(currentCategory, currentSearch);
  updateResultCount(results.length);

  if (results.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  grid.innerHTML = results.map(p => createProductCard(p)).join('');

  // Staggered animation
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 35}ms`;
    card.classList.add('card-animate-in');
  });

  Wishlist.syncAllIcons();
}

function updateResultCount(count) {
  const el = document.getElementById('result-count');
  if (el) el.textContent = `${count} product${count !== 1 ? 's' : ''}`;
}
