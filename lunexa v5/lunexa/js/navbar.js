// LUNEXA v5 — navbar.js
function renderNavbar(){
  const el=document.getElementById('navbar');if(!el)return;
  const user=Store.getCurrentUser();
  const LOGO=`<svg class="nav-logo-mark" width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="13" stroke="currentColor" stroke-width="1.8"/><path d="M11 10 L11 22 L21 22" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="10" r="1.5" fill="currentColor"/></svg>`;
  const ICONS={home:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>`,grid:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="7" height="7" rx="1"/><rect x="15" y="3" width="7" height="7" rx="1"/><rect x="2" y="14" width="7" height="7" rx="1"/><rect x="15" y="14" width="7" height="7" rx="1"/></svg>`,mon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,star:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>`,bag:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`,info:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,heart:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,cart:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,user:`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>`};
  el.innerHTML=`<div class="nav-inner">
    <a href="index.html" class="nav-logo">${LOGO}<span class="nav-logo-text">LUNEXA</span></a>
    <nav class="nav-center">
      <a href="index.html" class="nav-item">${ICONS.home}<span class="nav-tip">Home</span></a>
      <a href="products.html" class="nav-item">${ICONS.grid}<span class="nav-tip">All Products</span></a>
      <div class="nav-divider"></div>
      <a href="products.html?cat=electronics" class="nav-item">${ICONS.mon}<span class="nav-tip">Electronics</span></a>
      <a href="products.html?cat=gadgets" class="nav-item">${ICONS.star}<span class="nav-tip">Gadgets</span></a>
      <a href="products.html?cat=accessories" class="nav-item">${ICONS.bag}<span class="nav-tip">Accessories</span></a>
      <div class="nav-divider"></div>
      <a href="about.html" class="nav-item">${ICONS.info}<span class="nav-tip">About</span></a>
    </nav>
    <div class="nav-right">
      <div class="nav-search-wrap">
        <div class="nav-search-expanded" id="nav-search-expanded"><input type="text" id="nav-search-input" placeholder="Search products…" autocomplete="off"/><button class="nav-search-submit" onclick="handleNavSearch()"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></button></div>
        <button class="nav-search-toggle" onclick="toggleSearch()"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></button>
      </div>
      <a href="wishlist.html" class="nav-action">${ICONS.heart}<span class="wishlist-badge badge" style="display:none">0</span></a>
      <a href="cart.html" class="nav-action">${ICONS.cart}<span class="cart-badge badge" style="display:none">0</span></a>
      ${user?`<div class="nav-profile-wrap"><button class="nav-profile-btn" onclick="toggleProfileMenu()"><span class="nav-avatar">${user.avatar||user.name.charAt(0).toUpperCase()}</span></button><div class="nav-profile-menu" id="nav-profile-menu"><div class="npm-header"><div class="npm-avatar">${user.avatar||user.name.charAt(0).toUpperCase()}</div><div><div class="npm-name">${user.name}</div><div class="npm-email">${user.email}</div></div></div><div class="npm-divider"></div><a href="profile.html" class="npm-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>My Profile</a><a href="profile.html#orders" class="npm-item"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>My Orders</a><div class="npm-divider"></div><button class="npm-item npm-logout" onclick="Auth.logout();window.location.href='index.html'"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Sign Out</button></div></div>`:`<a href="login.html" class="nav-action">${ICONS.user}<span class="nav-tip">Sign In</span></a>`}
      <button class="hamburger" id="hamburger-btn" onclick="toggleMobileMenu()"><span></span><span></span><span></span></button>
    </div></div>
    <div class="mobile-menu" id="mobile-menu">
      <a href="index.html" class="mobile-menu-item">${ICONS.home} Home</a>
      <a href="products.html" class="mobile-menu-item">${ICONS.grid} All Products</a>
      <div class="mobile-menu-divider"></div>
      <a href="products.html?cat=electronics" class="mobile-menu-item">${ICONS.mon} Electronics</a>
      <a href="products.html?cat=gadgets" class="mobile-menu-item">${ICONS.star} Gadgets</a>
      <a href="products.html?cat=accessories" class="mobile-menu-item">${ICONS.bag} Accessories</a>
      <div class="mobile-menu-divider"></div>
      <a href="wishlist.html" class="mobile-menu-item">${ICONS.heart} Wishlist</a>
      <a href="cart.html" class="mobile-menu-item">${ICONS.cart} Cart</a>
      ${user?`<a href="profile.html" class="mobile-menu-item">${ICONS.user} My Profile</a><button class="mobile-menu-item" style="width:100%;text-align:left;font-family:inherit;" onclick="Auth.logout();window.location.href='index.html'">${ICONS.user} Sign Out</button>`:`<a href="login.html" class="mobile-menu-item">${ICONS.user} Sign In</a><a href="signup.html" class="mobile-menu-item">${ICONS.user} Sign Up</a>`}
      <div class="mobile-search"><input type="text" id="mobile-search-input" placeholder="Search products…"/><button onclick="handleMobileSearch()">Go</button></div>
    </div>`;
  Cart.updateBadge();Wishlist.updateBadge();highlightCurrentNav();
  document.getElementById('nav-search-input')?.addEventListener('keydown',e=>{if(e.key==='Enter')handleNavSearch();if(e.key==='Escape')closeSearch();});
  document.getElementById('mobile-search-input')?.addEventListener('keydown',e=>{if(e.key==='Enter')handleMobileSearch();});
  window.addEventListener('scroll',()=>document.getElementById('navbar')?.classList.toggle('scrolled',window.scrollY>10),{passive:true});
  document.addEventListener('click',e=>{const sw=document.querySelector('.nav-search-wrap');if(sw&&!sw.contains(e.target))closeSearch();const pm=document.getElementById('nav-profile-menu');const pb=document.querySelector('.nav-profile-btn');if(pm&&pm.classList.contains('open')&&!pm.contains(e.target)&&e.target!==pb)pm.classList.remove('open');});
}
function toggleSearch(){const el=document.getElementById('nav-search-expanded');if(!el)return;const o=el.classList.toggle('open');if(o)setTimeout(()=>document.getElementById('nav-search-input')?.focus(),50);}
function closeSearch(){document.getElementById('nav-search-expanded')?.classList.remove('open');}
function handleNavSearch(){const q=document.getElementById('nav-search-input')?.value?.trim();if(q)window.location.href=`products.html?search=${encodeURIComponent(q)}`;}
function handleMobileSearch(){const q=document.getElementById('mobile-search-input')?.value?.trim();if(q)window.location.href=`products.html?search=${encodeURIComponent(q)}`;}
function toggleMobileMenu(){const m=document.getElementById('mobile-menu'),b=document.getElementById('hamburger-btn');if(!m)return;m.classList.toggle('open');b?.classList.toggle('open',m.classList.contains('open'));}
function toggleProfileMenu(){document.getElementById('nav-profile-menu')?.classList.toggle('open');}
function highlightCurrentNav(){const path=window.location.pathname.split('/').pop()||'index.html';const params=new URLSearchParams(window.location.search);const cat=params.get('cat');document.querySelectorAll('.nav-item').forEach(link=>{const href=link.getAttribute('href')||'';let active=false;if(cat&&href.includes(`cat=${cat}`))active=true;else if(!cat&&(href===path||(path===''&&href==='index.html')))active=true;link.classList.toggle('active',active);});}
document.addEventListener('DOMContentLoaded',()=>{renderNavbar();initCookieBanner();});
