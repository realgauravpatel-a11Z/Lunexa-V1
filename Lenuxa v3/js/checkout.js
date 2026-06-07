// ============================================================
// LUNEXA — checkout.js  (UPI / Card / COD + order history)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  if (Cart.getCount() === 0) { window.location.href = 'cart.html'; return; }
  renderOrderSummary();
  initPaymentTabs();
  bindCheckoutForm();
});

// ── Order summary panel ──────────────────────────────────
function renderOrderSummary() {
  const container = document.getElementById('checkout-summary');
  if (!container) return;
  const cartData  = Cart.getAll();
  const subtotal  = Cart.getTotal();
  const count     = Cart.getCount();
  const shipping  = subtotal > 100 ? 0 : 9.99;
  const tax       = subtotal * 0.08;
  const total     = subtotal + shipping + tax;

  container.innerHTML = `
    <div class="checkout-order-box">
      <h3 class="checkout-order-title">Your Order</h3>
      <div class="checkout-items-list">
        ${cartData.map(item => {
          const p = getProductById(item.productId);
          if (!p) return '';
          return `<div class="checkout-item">
            <div class="checkout-item-img-wrap">
              <img src="${p.image}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/fb${p.id}/120/120'"/>
              <span class="checkout-item-qty">${item.quantity}</span>
            </div>
            <div class="checkout-item-info">
              <span class="checkout-item-name">${p.name}</span>
              <span class="checkout-item-price">${formatPrice(p.price * item.quantity)}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div class="checkout-summary-divider"></div>
      <div class="checkout-summary-lines">
        <div class="checkout-summary-line"><span>Subtotal</span><span>${formatPrice(subtotal)}</span></div>
        <div class="checkout-summary-line"><span>Shipping</span><span>${shipping===0?'<strong>FREE</strong>':formatPrice(shipping)}</span></div>
        <div class="checkout-summary-line"><span>Tax (8%)</span><span>$${tax.toFixed(2)}</span></div>
      </div>
      <div class="checkout-summary-divider"></div>
      <div class="checkout-total-line"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    </div>`;
}

// ── Payment tabs ─────────────────────────────────────────
function initPaymentTabs() {
  const tabs = document.querySelectorAll('.pay-tab');
  const pans = document.querySelectorAll('.pay-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      pans.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(`panel-${tab.dataset.method}`);
      if (target) target.classList.add('active');
    });
  });
  // Card formatting
  const cn = document.getElementById('card-number');
  if (cn) cn.addEventListener('input', () => {
    let v = cn.value.replace(/\D/g,'').slice(0,16);
    cn.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
  });
  const ex = document.getElementById('card-expiry');
  if (ex) ex.addEventListener('input', () => {
    let v = ex.value.replace(/\D/g,'').slice(0,4);
    if (v.length>2) v = v.slice(0,2)+'/'+v.slice(2);
    ex.value = v;
  });
  const cv = document.getElementById('card-cvv');
  if (cv) cv.addEventListener('input', () => { cv.value = cv.value.replace(/\D/g,'').slice(0,4); });
}

// ── Form submission ──────────────────────────────────────
function bindCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  form.querySelectorAll('input,select').forEach(f => {
    f.addEventListener('blur', () => validateField(f));
    f.addEventListener('input', () => { if (f.classList.contains('error')) validateField(f); });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const method = document.querySelector('.pay-tab.active')?.dataset.method || 'card';

    // Validate contact + shipping fields
    let valid = true;
    form.querySelectorAll('[data-required]').forEach(f => { if (!validateField(f)) valid = false; });

    // Validate payment fields for active tab
    const panel = document.getElementById(`panel-${method}`);
    if (panel) {
      panel.querySelectorAll('input[required]').forEach(f => { if (!validateField(f)) valid = false; });
    }
    if (!valid) return;

    // Simulate COD instant success, others with processing delay
    if (method === 'cod') {
      processOrder(method);
    } else {
      simulatePaymentProcessing(method);
    }
  });
}

function simulatePaymentProcessing(method) {
  const btn = document.getElementById('place-order-btn');
  const overlay = document.getElementById('payment-overlay');
  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Processing payment…'; }
  if (overlay) overlay.classList.add('active');

  setTimeout(() => {
    // 90% success rate simulation
    const success = Math.random() < 0.9;
    if (overlay) overlay.classList.remove('active');
    if (success) {
      processOrder(method);
    } else {
      if (btn) { btn.disabled = false; btn.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Place Order Securely'; }
      showPaymentError('Payment declined. Please check your details and try again.');
    }
  }, 2200);
}

function processOrder(paymentMethod) {
  const cartData = Cart.getAll();
  const subtotal = Cart.getTotal();
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax      = subtotal * 0.08;

  const order = {
    id:            Auth.generateOrderId(),
    trackingId:    Auth.generateTrackingId(),
    date:          new Date().toISOString(),
    items:         cartData.map(i => {
      const p = getProductById(i.productId);
      return { productId: i.productId, quantity: i.quantity, name: p?.name, price: p?.price, image: p?.image };
    }),
    subtotal,
    shipping,
    tax,
    total:         subtotal + shipping + tax,
    paymentMethod,
    status:        'placed',
    statusHistory: [
      { status: 'placed',  label: 'Order Placed',     time: new Date().toISOString() }
    ],
    // Fake future status times
    estimatedDelivery: new Date(Date.now() + 6 * 86400000).toISOString(),
    shippingAddress: getShippingAddressFromForm(),
  };

  Store.addOrder(order);

  // Save address to user profile
  const user = Store.getCurrentUser();
  if (user) {
    const addr = getShippingAddressFromForm();
    Store.updateUser(user.id, { address: addr });
  }

  Cart.clear();
  window.location.href = `success.html?order=${order.id}&tracking=${order.trackingId}`;
}

function getShippingAddressFromForm() {
  return {
    street:  document.getElementById('address')?.value || '',
    city:    document.getElementById('city')?.value || '',
    state:   document.getElementById('state')?.value || '',
    zip:     document.getElementById('zip')?.value || '',
    country: document.getElementById('country')?.value || 'US',
  };
}

function showPaymentError(msg) {
  let el = document.getElementById('payment-error');
  if (!el) {
    el = document.createElement('div');
    el.id = 'payment-error';
    el.style.cssText = 'background:#fff0f0;border:1px solid #fccaca;color:#c0392b;padding:12px 16px;border-radius:8px;font-size:13.5px;margin-top:16px;display:flex;align-items:center;gap:10px;';
    document.getElementById('place-order-btn')?.insertAdjacentElement('afterend', el);
  }
  el.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> ${msg}`;
  setTimeout(() => el?.remove(), 5000);
}

// ── Validation ───────────────────────────────────────────
function validateField(input) {
  const val = input.value.trim();
  let error = '';
  if ((input.required || input.dataset.required) && !val) error = 'This field is required.';
  else if (input.type==='email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) error = 'Please enter a valid email.';
  else if (input.id==='card-number' && val && val.replace(/\s/g,'').length<16) error = 'Enter a valid 16-digit card number.';
  else if (input.id==='card-expiry' && val && !/^\d{2}\/\d{2}$/.test(val)) error = 'Use MM/YY format.';
  else if (input.id==='card-cvv' && val && val.length<3) error = 'CVV must be 3–4 digits.';
  else if (input.id==='zip' && val && !/^\d{4,10}$/.test(val.replace(/\s/g,''))) error = 'Enter a valid postal code.';
  else if (input.id==='upi-id' && val && !/^[\w.\-]+@[\w]+$/.test(val)) error = 'Enter a valid UPI ID (e.g. name@upi).';

  const group = input.closest('.form-group');
  const errEl = group?.querySelector('.field-error');
  if (error) { input.classList.add('error'); if (errEl) errEl.textContent = error; }
  else       { input.classList.remove('error'); if (errEl) errEl.textContent = ''; }
  return !error;
}
