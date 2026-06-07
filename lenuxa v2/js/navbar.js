// ============================================================
// LUNEXA — Navbar (icon-based with tooltips)
// ============================================================

function renderNavbar() {
  const container = document.getElementById('navbar');
  if (!container) return;

  container.innerHTML = `
    <div class="nav-inner">

      <!-- Logo -->
      <a href="index.html" class="nav-logo">
        <svg class="nav-logo-mark" width="24" height="24" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5"/>
          <path d="M10 22 L16 10 L22 22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M12 18.5 H20" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
        </svg>
        <span class="nav-logo-text">LUNEXA</span>
      </a>

      <!-- Center icon navigation -->
      <nav class="nav-center" aria-label="Main navigation">

        <a href="index.html" class="nav-item" title="Home">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
            <path d="M9 21V12h6v9"/>
          </svg>
          <span class="nav-tip">Home</span>
        </a>

        <a href="products.html" class="nav-item" title="All Products">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="7" height="7" rx="1"/>
            <rect x="15" y="3" width="7" height="7" rx="1"/>
            <rect x="2" y="14" width="7" height="7" rx="1"/>
            <rect x="15" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span class="nav-tip">All Products</span>
        </a>

        <div class="nav-divider"></div>

        <a href="products.html?cat=electronics" class="nav-item" title="Electronics">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <path d="M8 21h8M12 17v4"/>
          </svg>
          <span class="nav-tip">Electronics</span>
        </a>

        <a href="products.html?cat=gadgets" class="nav-item" title="Gadgets">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
          </svg>
          <span class="nav-tip">Gadgets</span>
        </a>

        <a href="products.html?cat=accessories" class="nav-item" title="Accessories">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>
          </svg>
          <span class="nav-tip">Accessories</span>
        </a>

        <div class="nav-divider"></div>

        <a href="about.html" class="nav-item" title="About Us">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
          <span class="nav-tip">About Us</span>
        </a>

      </nav>

      <!-- Right: search + wishlist + cart + hamburger -->
      <div class="nav-right">

        <!-- Expandable search -->
        <div class="nav-search-wrap">
          <div class="nav-search-expanded" id="nav-search-expanded">
            <input type="text" id="nav-search-input" placeholder="Search products…" autocomplete="off" />
            <button class="nav-search-submit" onclick="handleNavSearch()" title="Search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
          <button class="nav-search-toggle" id="search-toggle-btn" onclick="toggleSearch()" title="Search">
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>

        <a href="wishlist.html" class="nav-action" title="Wishlist">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span class="wishlist-badge badge" style="display:none">0</span>
        </a>

        <a href="cart.html" class="nav-action" title="Cart">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          <span class="cart-badge badge" style="display:none">0</span>
        </a>

        <button class="hamburger" id="hamburger-btn" onclick="toggleMobileMenu()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div class="mobile-menu" id="mobile-menu">
      <a href="index.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
        Home
      </a>
      <a href="products.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></svg>
        All Products
      </a>
      <div class="mobile-menu-divider"></div>
      <a href="products.html?cat=electronics" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        Electronics
      </a>
      <a href="products.html?cat=gadgets" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
        Gadgets
      </a>
      <a href="products.html?cat=accessories" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>
        Accessories
      </a>
      <div class="mobile-menu-divider"></div>
      <a href="wishlist.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        Wishlist
      </a>
      <a href="cart.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        Cart
      </a>
      <a href="about.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        About Us
      </a>
      <a href="contact.html" class="mobile-menu-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Contact
      </a>
      <div class="mobile-search">
        <input type="text" id="mobile-search-input" placeholder="Search products…" />
        <button onclick="handleMobileSearch()">Search</button>
      </div>
    </div>
  `;

  Cart.updateBadge();
  Wishlist.updateBadge();
  highlightCurrentNav();

  // Enter key on search
  const si = document.getElementById('nav-search-input');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter') handleNavSearch(); if (e.key === 'Escape') closeSearch(); });
  const mi = document.getElementById('mobile-search-input');
  if (mi) mi.addEventListener('keydown', e => { if (e.key === 'Enter') handleMobileSearch(); });

  // Scroll shadow
  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Close search on outside click
  document.addEventListener('click', e => {
    const wrap = document.querySelector('.nav-search-wrap');
    if (wrap && !wrap.contains(e.target)) closeSearch();
  });
}

function toggleSearch() {
  const expanded = document.getElementById('nav-search-expanded');
  if (!expanded) return;
  const isOpen = expanded.classList.toggle('open');
  if (isOpen) { setTimeout(() => document.getElementById('nav-search-input')?.focus(), 50); }
}
function closeSearch() {
  document.getElementById('nav-search-expanded')?.classList.remove('open');
}
function handleNavSearch() {
  const q = document.getElementById('nav-search-input')?.value?.trim();
  if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}
function handleMobileSearch() {
  const q = document.getElementById('mobile-search-input')?.value?.trim();
  if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
}
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger-btn');
  if (!menu) return;
  const open = menu.classList.toggle('open');
  btn?.classList.toggle('open', open);
}
function highlightCurrentNav() {
  const path = window.location.pathname.split('/').pop();
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  document.querySelectorAll('.nav-item').forEach(link => {
    const href = link.getAttribute('href') || '';
    let active = false;
    if (cat && href.includes(`cat=${cat}`)) active = true;
    else if (!cat && href === path) active = true;
    else if (path === '' && href === 'index.html') active = true;
    link.classList.toggle('active', active);
  });
}

document.addEventListener('DOMContentLoaded', renderNavbar);
