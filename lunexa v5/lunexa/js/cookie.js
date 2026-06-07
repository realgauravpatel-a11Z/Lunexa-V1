// LUNEXA v5 — cookie.js
function initCookieBanner(){
  if(Store.getCookieConsent()!==null)return;
  const b=document.createElement('div');b.className='cookie-banner';b.id='cookie-banner';
  b.innerHTML=`<svg class="cookie-banner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/></svg>
  <div class="cookie-banner-body">
    <div class="cookie-banner-title">We use cookies</div>
    <div class="cookie-banner-text">We use local storage to enhance your experience. No personal data is transmitted externally.</div>
    <div class="cookie-banner-actions">
      <button class="cookie-btn-accept" onclick="acceptCookies()">Accept All</button>
      <button class="cookie-btn-decline" onclick="declineCookies()">Decline</button>
      <button class="cookie-btn-manage" onclick="window.location.href='cookies.html'">Manage</button>
    </div>
  </div>`;
  document.body.appendChild(b);
}
function acceptCookies(){Store.setCookieConsent('accepted');Store.setCookiePrefs({essential:true,analytics:true,marketing:true});closeCookieBanner();}
function declineCookies(){Store.setCookieConsent('declined');Store.setCookiePrefs({essential:true,analytics:false,marketing:false});closeCookieBanner();}
function closeCookieBanner(){const b=document.getElementById('cookie-banner');if(b){b.style.opacity='0';b.style.transform='translateY(14px)';b.style.transition='opacity .3s,transform .3s';setTimeout(()=>b.remove(),300);}}
