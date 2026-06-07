// LUNEXA v5 — checkout.js
document.addEventListener('DOMContentLoaded',()=>{
  if(Cart.getCount()===0){window.location.href='cart.html';return;}
  renderOrderSummary();initPaymentTabs();bindCheckoutForm();
});
function renderOrderSummary(){
  const c=document.getElementById('checkout-summary');if(!c)return;
  const cartData=Cart.getAll(),subtotal=Cart.getTotal(),count=Cart.getCount();
  const shipping=subtotal>999?0:99,tax=Math.round(subtotal*0.18),total=subtotal+shipping+tax;
  c.innerHTML=`<div class="checkout-order-box"><h3 class="checkout-order-title">Your Order</h3><div class="checkout-items-list">${cartData.map(item=>{const p=getProductById(item.productId);if(!p)return'';return`<div class="checkout-item"><div class="checkout-item-img-wrap"><img src="${p.image}" alt="${p.name}" onerror="this.src='https://picsum.photos/seed/ln${p.id}/120/120'"/><span class="checkout-item-qty">${item.quantity}</span></div><div class="checkout-item-info"><span class="checkout-item-name">${p.name}</span><span class="checkout-item-price">${formatPrice(p.price*item.quantity)}</span></div></div>`;}).join('')}</div><div class="checkout-summary-divider"></div><div class="checkout-summary-lines"><div class="checkout-summary-line"><span>Subtotal (${count} items)</span><span>${formatPrice(subtotal)}</span></div><div class="checkout-summary-line"><span>Delivery</span><span>${shipping===0?'<strong style="color:var(--success)">FREE</strong>':formatPrice(shipping)}</span></div><div class="checkout-summary-line"><span>GST (18%)</span><span>${formatPrice(tax)}</span></div></div><div class="checkout-summary-divider"></div><div class="checkout-total-line"><span>Total</span><span>${formatPrice(total)}</span></div></div>`;
}
function initPaymentTabs(){
  document.querySelectorAll('.pay-tab').forEach(tab=>{tab.addEventListener('click',()=>{document.querySelectorAll('.pay-tab').forEach(t=>t.classList.remove('active'));document.querySelectorAll('.pay-panel').forEach(p=>p.classList.remove('active'));tab.classList.add('active');document.getElementById(`panel-${tab.dataset.method}`)?.classList.add('active');});});
  const cn=document.getElementById('card-number');if(cn)cn.addEventListener('input',()=>{let v=cn.value.replace(/\D/g,'').slice(0,16);cn.value=v.replace(/(\d{4})(?=\d)/g,'$1 ');});
  const ex=document.getElementById('card-expiry');if(ex)ex.addEventListener('input',()=>{let v=ex.value.replace(/\D/g,'').slice(0,4);if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);ex.value=v;});
}
function bindCheckoutForm(){
  const form=document.getElementById('checkout-form');if(!form)return;
  form.querySelectorAll('input,select').forEach(f=>{f.addEventListener('blur',()=>validateField(f));f.addEventListener('input',()=>{if(f.classList.contains('error'))validateField(f);});});
  form.addEventListener('submit',e=>{
    e.preventDefault();const method=document.querySelector('.pay-tab.active')?.dataset.method||'card';
    let valid=true;form.querySelectorAll('[data-required]').forEach(f=>{if(!validateField(f))valid=false;});
    if(!valid)return;
    if(method==='cod')processOrder(method);else simulatePayment(method);
  });
}
function simulatePayment(method){
  const btn=document.getElementById('place-order-btn'),overlay=document.getElementById('payment-overlay');
  if(btn){btn.disabled=true;btn.innerHTML='<span class="spinner"></span> Processing…';}
  if(overlay)overlay.classList.add('active');
  setTimeout(()=>{
    if(overlay)overlay.classList.remove('active');
    const ok=Math.random()<0.9;
    if(ok){processOrder(method);}
    else{if(btn){btn.disabled=false;btn.innerHTML='Place Order Securely';}showPayErr('Payment declined. Please check your details.');}
  },2200);
}
function processOrder(paymentMethod){
  const cartData=Cart.getAll(),subtotal=Cart.getTotal(),shipping=subtotal>999?0:99,tax=Math.round(subtotal*0.18);
  const addr=getAddrFromForm();const user=Store.getCurrentUser();
  const order={id:Auth.generateOrderId(),trackingId:Auth.generateTrackingId(),date:new Date().toISOString(),
    items:cartData.map(i=>{const p=getProductById(i.productId);return{productId:i.productId,quantity:i.quantity,name:p?.name,price:p?.price,image:p?.image};}),
    subtotal,shipping,tax,total:subtotal+shipping+tax,paymentMethod,status:'placed',
    estimatedDelivery:new Date(Date.now()+6*86400000).toISOString(),shippingAddress:addr};
  Store.addOrder(order);
  if(user)Store.updateUser(user.id,{address:addr});
  if(typeof syncToSheets==='function')syncToSheets('order',{orderId:order.id,customer:user?.name,email:user?.email,total:order.total,items:order.items.length,paymentMethod,city:addr.city,date:order.date});
  Cart.clear();window.location.href=`success.html?order=${order.id}&tracking=${order.trackingId}`;
}
function getAddrFromForm(){return{street:document.getElementById('address')?.value||'',city:document.getElementById('city')?.value||'',state:document.getElementById('state')?.value||'',zip:document.getElementById('zip')?.value||'',country:document.getElementById('country')?.value||'IN'};}
function showPayErr(msg){let el=document.getElementById('payment-error');if(!el){el=document.createElement('div');el.id='payment-error';el.style.cssText='background:var(--error-bg);border:1px solid var(--error-border);color:var(--error);padding:11px 14px;border-radius:10px;font-size:13.5px;margin-top:14px;';document.getElementById('place-order-btn')?.insertAdjacentElement('afterend',el);}el.textContent=msg;setTimeout(()=>el?.remove(),5000);}
function validateField(input){
  const val=input.value.trim();let error='';
  if((input.required||input.dataset.required)&&!val)error='Required.';
  else if(input.type==='email'&&val&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))error='Enter a valid email.';
  const group=input.closest('.form-group');const errEl=group?.querySelector('.field-error');
  if(error){input.classList.add('error');if(errEl)errEl.textContent=error;}else{input.classList.remove('error');if(errEl)errEl.textContent='';}
  return!error;
}
