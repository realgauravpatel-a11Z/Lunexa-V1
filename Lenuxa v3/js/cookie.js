// ============================================================
// LUNEXA — cookie.js  (consent banner)
// ============================================================
function initCookieBanner() {
  if (Store.getCookieConsent() !== null) return; // already decided
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <svg class="cookie-banner-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
      <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/>
    </svg>
    <div class="cookie-banner-body">
      <div class="cookie-banner-title">We use cookies</div>
      <div class="cookie-banner-text">We use cookies to enhance your browsing experience and analyse site traffic. Your cart and wishlist are stored locally and never transmitted.</div>
      <div class="cookie-banner-actions">
        <button class="cookie-btn-accept" onclick="acceptCookies()">Accept All</button>
        <button class="cookie-btn-decline" onclick="declineCookies()">Decline</button>
      </div>
    </div>`;
  document.body.appendChild(banner);
}

function acceptCookies() {
  Store.setCookieConsent('accepted');
  closeCookieBanner();
}
function declineCookies() {
  Store.setCookieConsent('declined');
  closeCookieBanner();
}
function closeCookieBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { b.style.opacity='0'; b.style.transform='translateY(20px)'; setTimeout(()=>b.remove(),300); }
}
