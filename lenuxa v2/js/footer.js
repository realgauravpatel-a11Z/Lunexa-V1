// ============================================================
// LUNEXA — Shared footer renderer
// ============================================================
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="footer-logo">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" style="color:var(--gold)">
            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 22 L16 10 L22 22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M12 18.5 H20" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="16" cy="10" r="1.5" fill="currentColor"/>
          </svg>
          <span class="footer-logo-text">LUNEXA</span>
        </a>
        <p class="footer-tagline">Curated technology for those who expect the very best. Premium electronics, gadgets, and accessories.</p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" title="Twitter/X" aria-label="Twitter">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          <a href="#" class="footer-social-link" title="Instagram" aria-label="Instagram">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
          </a>
          <a href="#" class="footer-social-link" title="LinkedIn" aria-label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
        <div style="margin-top:20px;">
          <p style="font-size:11px;color:rgba(255,255,255,0.3);margin-bottom:10px;letter-spacing:0.08em;text-transform:uppercase;">Newsletter</p>
          <div class="footer-newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <a href="products.html?cat=electronics">Electronics</a>
        <a href="products.html?cat=gadgets">Gadgets</a>
        <a href="products.html?cat=accessories">Accessories</a>
        <a href="products.html">All Products</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="about.html">About Lunexa</a>
        <a href="contact.html">Contact Us</a>
        <a href="wishlist.html">Wishlist</a>
        <a href="cart.html">Cart</a>
      </div>
      <div class="footer-col">
        <h4>Policies</h4>
        <a href="privacy.html">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Return Policy</a>
        <a href="#">Shipping Info</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span style="color:rgba(255,255,255,0.3)">&copy; 2025 Lunexa. All rights reserved.</span>
      <div class="footer-bottom-links">
        <a href="privacy.html">Privacy</a>
        <a href="#">Terms</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', renderFooter);
