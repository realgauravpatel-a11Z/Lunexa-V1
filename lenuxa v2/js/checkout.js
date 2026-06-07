// ============================================================
// CHECKOUT PAGE — order summary + simulated form submission
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Redirect to cart if cart is empty
  if (Cart.getCount() === 0) {
    window.location.href = 'cart.html';
    return;
  }

  renderOrderSummary();
  bindCheckoutForm();
});

// ── Render order summary on checkout page ─────────────────
function renderOrderSummary() {
  const container = document.getElementById('checkout-summary');
  if (!container) return;

  const cartData  = Cart.getAll();
  const subtotal  = Cart.getTotal();
  const itemCount = Cart.getCount();
  const shipping  = subtotal > 100 ? 0 : 9.99;
  const tax       = subtotal * 0.08;
  const total     = subtotal + shipping + tax;

  const itemsHtml = cartData.map(item => {
    const p = getProductById(item.productId);
    if (!p) return '';
    return `
      <div class="checkout-item">
        <div class="checkout-item-img-wrap">
          <img src="${p.image}" alt="${p.name}" />
          <span class="checkout-item-qty">${item.quantity}</span>
        </div>
        <div class="checkout-item-info">
          <span class="checkout-item-name">${p.name}</span>
          <span class="checkout-item-price">${formatPrice(p.price * item.quantity)}</span>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="checkout-order-box">
      <h3 class="checkout-order-title">Your Order</h3>

      <div class="checkout-items-list">${itemsHtml}</div>

      <div class="checkout-summary-divider"></div>

      <div class="checkout-summary-lines">
        <div class="checkout-summary-line">
          <span>Subtotal (${itemCount} items)</span>
          <span>${formatPrice(subtotal)}</span>
        </div>
        <div class="checkout-summary-line">
          <span>Shipping</span>
          <span>${shipping === 0 ? '<strong>FREE</strong>' : formatPrice(shipping)}</span>
        </div>
        <div class="checkout-summary-line">
          <span>Tax (8%)</span>
          <span>$${tax.toFixed(2)}</span>
        </div>
      </div>

      <div class="checkout-summary-divider"></div>

      <div class="checkout-total-line">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
    </div>
  `;
}

// ── Bind form submission ──────────────────────────────────
function bindCheckoutForm() {
  const form = document.getElementById('checkout-form');
  if (!form) return;

  // Real-time validation
  form.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const valid = validateForm(form);
    if (!valid) return;

    // Simulate placing order
    const btn = document.getElementById('place-order-btn');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = `
        <span class="spinner"></span>
        Processing…
      `;
    }

    setTimeout(() => {
      Cart.clear();
      window.location.href = 'success.html';
    }, 1800);
  });

  // Card number formatting
  const cardInput = document.getElementById('card-number');
  if (cardInput) {
    cardInput.addEventListener('input', () => {
      let val = cardInput.value.replace(/\D/g, '').slice(0, 16);
      cardInput.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');
    });
  }

  // Expiry formatting
  const expiryInput = document.getElementById('card-expiry');
  if (expiryInput) {
    expiryInput.addEventListener('input', () => {
      let val = expiryInput.value.replace(/\D/g, '').slice(0, 4);
      if (val.length > 2) val = val.slice(0,2) + '/' + val.slice(2);
      expiryInput.value = val;
    });
  }

  // CVV: digits only
  const cvvInput = document.getElementById('card-cvv');
  if (cvvInput) {
    cvvInput.addEventListener('input', () => {
      cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 4);
    });
  }
}

// ── Validate a single field ───────────────────────────────
function validateField(input) {
  const val = input.value.trim();
  let error = '';

  if (input.required && !val) {
    error = 'This field is required.';
  } else if (input.type === 'email' && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    error = 'Please enter a valid email address.';
  } else if (input.id === 'card-number' && val && val.replace(/\s/g,'').length < 16) {
    error = 'Please enter a valid 16-digit card number.';
  } else if (input.id === 'card-expiry' && val && !/^\d{2}\/\d{2}$/.test(val)) {
    error = 'Enter expiry as MM/YY.';
  } else if (input.id === 'card-cvv' && val && val.length < 3) {
    error = 'CVV must be 3–4 digits.';
  } else if (input.id === 'zip' && val && !/^\d{4,10}$/.test(val.replace(/\s/g,''))) {
    error = 'Please enter a valid postal code.';
  }

  const group = input.closest('.form-group');
  if (!group) return !error;

  const errorEl = group.querySelector('.field-error');
  if (error) {
    input.classList.add('error');
    if (errorEl) errorEl.textContent = error;
  } else {
    input.classList.remove('error');
    if (errorEl) errorEl.textContent = '';
  }
  return !error;
}

// ── Validate all form fields ──────────────────────────────
function validateForm(form) {
  let allValid = true;
  form.querySelectorAll('input[required], select[required]').forEach(input => {
    if (!validateField(input)) allValid = false;
  });

  // Scroll to first error
  if (!allValid) {
    const firstError = form.querySelector('.error');
    if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return allValid;
}
