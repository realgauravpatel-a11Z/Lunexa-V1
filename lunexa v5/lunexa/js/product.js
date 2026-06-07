// LUNEXA v5 — product.js — unique reviews per product
const REVIEWER_POOL=[
  {name:'Rahul M.',city:'Mumbai'},{name:'Priya S.',city:'Delhi'},{name:'Arjun K.',city:'Bangalore'},
  {name:'Sneha R.',city:'Pune'},{name:'Vikram P.',city:'Chennai'},{name:'Ananya B.',city:'Hyderabad'},
  {name:'Rohan D.',city:'Ahmedabad'},{name:'Neha T.',city:'Kolkata'},{name:'Aditya J.',city:'Jaipur'},
  {name:'Kavya N.',city:'Surat'},{name:'Siddharth L.',city:'Lucknow'},{name:'Pooja A.',city:'Bhopal'},
  {name:'Manish G.',city:'Indore'},{name:'Deepika C.',city:'Nagpur'},{name:'Karan V.',city:'Vadodara'},
  {name:'Shweta S.',city:'Patna'},{name:'Nikhil R.',city:'Agra'},{name:'Meera P.',city:'Nashik'},
  {name:'Rajesh K.',city:'Meerut'},{name:'Swati B.',city:'Visakhapatnam'},
];
const REVIEW_TEXTS=[
  'Outstanding quality! Way better than I expected for the price. Fast delivery from Lunexa.',
  'Absolutely love this product. Build quality is solid and it works flawlessly.',
  'Great value for money. Exactly as described, no surprises. Very happy.',
  'Top-notch product. My family is impressed. Will buy from Lunexa again.',
  'Super fast shipping. Product is genuine and works perfectly out of the box.',
  'Premium feel, looks even better in person. The specs match perfectly.',
  'Very satisfied. Customer support was also helpful when I had a query.',
  'Brilliant purchase! The quality justifies every rupee. Highly recommend.',
  'Smooth performance, sleek design. Exactly what I was looking for.',
  'Exceeded my expectations. Easy to set up and works like a charm.',
  'Genuine product with proper warranty card. No issues whatsoever.',
  'Bought as a birthday gift and the recipient was thrilled. Great packaging too.',
  'Good product overall. Completely worth it for daily use.',
  'Solid build, great performance. Been using for weeks without any issues.',
  'Perfect in every way. Premium quality at a fair price point.',
  'Very happy with this purchase. Lunexa delivered on time.',
  'The performance is incredible. Highly recommend to anyone considering this.',
  'Excellent product! Looks premium and performs even better than advertised.',
  'Reliable and durable. Exactly what I needed.',
  'Five stars. Great quality, great price, great service by DevLeadLabs.',
];
function getProductReviews(productId){
  const seed=parseInt(productId)||100;const count=3+((seed*7)%3);const reviews=[];
  for(let i=0;i<count;i++){
    const ri=(seed*3+i*13)%REVIEWER_POOL.length;const ti=(seed*5+i*17)%REVIEW_TEXTS.length;
    const rating=i===0?5:i===1?5:((seed+i)%3===0?4:5);
    const daysAgo=30+(seed%7)*5+i*12;
    const date=new Date(Date.now()-daysAgo*86400000).toLocaleDateString('en-IN',{month:'short',year:'numeric'});
    reviews.push({name:REVIEWER_POOL[ri].name,city:REVIEWER_POOL[ri].city,rating,date,text:REVIEW_TEXTS[ti],verified:i<3});
  }
  return reviews;
}
document.addEventListener('DOMContentLoaded',()=>{
  const id=new URLSearchParams(window.location.search).get('id');
  const product=getProductById(id);if(!product){renderNotFound();return;}
  renderProduct(product);renderRelatedProducts(product);initImageZoom();
});
function renderProduct(product){
  document.title=`${product.name} — Lunexa`;
  const container=document.getElementById('product-detail');if(!container)return;
  const discount=Math.round(((product.oldPrice-product.price)/product.oldPrice)*100);
  const isWished=Wishlist.has(product.id),isInCart=Cart.has(product.id);
  const buyers=(product.reviews*0.75+650+product.id).toFixed(0);
  const reviews=getProductReviews(product.id);
  const ratingDist=[68,18,8,4,2];
  container.innerHTML=`
    <div class="product-gallery">
      <div class="product-main-img" id="main-img-wrap"><img id="main-product-img" src="${product.image}" alt="${product.name}" onerror="this.src='https://picsum.photos/seed/ln${product.id}/600/600'"/>${discount>0?`<span class="detail-badge-discount">-${discount}% OFF</span>`:''}</div>
      <div class="product-thumbs">${['a','b','c','d'].map((s,i)=>`<div class="thumb ${i===0?'active':''}" onclick="switchImg(this,'https://picsum.photos/seed/${product.id}${s}/600/600')"><img src="https://picsum.photos/seed/${product.id}${s}/120/120" alt="View ${i+1}" loading="lazy"/></div>`).join('')}</div>
    </div>
    <div class="product-info">
      <div class="product-info-top"><span class="product-category-tag">${product.category}</span>
        <button class="detail-wishlist-btn ${isWished?'active':''}" data-wishlist-id="${product.id}" onclick="handleDetailWishlist(${product.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="${isWished?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span>${isWished?'Wishlisted':'Wishlist'}</span>
        </button>
      </div>
      <h1 class="product-title">${product.name}</h1>
      <div class="product-rating-row">
        <span class="product-stars">${'★'.repeat(Math.floor(product.rating))}</span>
        <span class="product-rating-val">${product.rating}</span>
        <span class="product-reviews">${product.reviews.toLocaleString()} reviews</span>
        <span class="product-buyers">${parseInt(buyers).toLocaleString()}+ sold</span>
      </div>
      <div class="product-pricing-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        <span class="product-old-price">${formatPrice(product.oldPrice)}</span>
        ${discount>0?`<span class="product-savings">Save ${formatPrice(product.oldPrice-product.price)}</span>`:''}
      </div>
      <p class="product-description">${product.description}</p>
      <div class="product-specs"><h3>Key Specifications</h3><div class="specs-grid">${product.specs.map(s=>`<div class="spec-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${s}</span></div>`).join('')}</div></div>
      <div class="product-highlights"><h3>Why Buy From Lunexa</h3><ul class="highlight-list"><li>Premium quality, rigorously tested before dispatch</li><li>Genuine product with manufacturer warranty</li><li>Free delivery on orders above ₹999</li><li>24/7 after-sales support by DevLeadLabs</li></ul></div>
      <div class="product-qty-row"><label>Quantity</label><div class="qty-controls"><button onclick="changeQty(-1)">−</button><input type="number" id="product-qty" value="1" min="1" max="99" readonly/><button onclick="changeQty(1)">+</button></div></div>
      <div class="product-actions">
        <button class="btn-add-cart ${isInCart?'in-cart':''}" id="detail-cart-btn" onclick="handleDetailCart(${product.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          ${isInCart?'Go to Cart':'Add to Cart'}
        </button>
        <a href="checkout.html" class="btn-buy-now" onclick="if(!Store.isLoggedIn()){event.preventDefault();showAuthGate('buy');return;}if(!Cart.has(${product.id})){Cart.add(${product.id},parseInt(document.getElementById('product-qty').value)||1);}">Buy Now</a>
      </div>
      <div class="trust-badges">
        <div class="trust-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Secure Checkout</div>
        <div class="trust-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>Free Delivery</div>
        <div class="trust-badge"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>30-Day Returns</div>
      </div>
    </div>
    <div class="product-reviews-section">
      <h2 class="reviews-title">Customer Reviews</h2>
      <div class="reviews-overview">
        <div class="reviews-score"><div class="reviews-big-num">${product.rating}</div><div class="reviews-big-stars">${'★'.repeat(Math.floor(product.rating))}</div><div class="reviews-total">${product.reviews.toLocaleString()} reviews</div></div>
        <div class="reviews-bars">${ratingDist.map((pct,i)=>`<div class="review-bar-row"><span class="review-bar-label">${5-i}★</span><div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div><span class="review-bar-pct">${pct}%</span></div>`).join('')}</div>
      </div>
      <div class="reviews-list">${reviews.map(r=>`<div class="review-card"><div class="review-header"><div class="review-avatar">${r.name.charAt(0)}</div><div><div class="review-name">${r.name} <span style="font-size:11px;color:var(--muted-2);font-weight:400;">${r.city}</span>${r.verified?'<span class="review-verified">Verified</span>':''}</div><div class="review-meta"><span class="review-stars">${'★'.repeat(r.rating)}</span> · ${r.date}</div></div></div><p class="review-text">${r.text}</p></div>`).join('')}</div>
    </div>`;
  Wishlist.syncAllIcons();
}
function renderRelatedProducts(product){const c=document.getElementById('related-products');if(!c)return;const related=getActiveProducts().filter(p=>p.category===product.category&&p.id!==product.id).slice(0,4);if(!related.length){document.getElementById('related-section')?.remove();return;}c.innerHTML=related.map(createProductCard).join('');Wishlist.syncAllIcons();}
function changeQty(delta){const inp=document.getElementById('product-qty');if(inp)inp.value=Math.max(1,Math.min(99,parseInt(inp.value)+delta));}
function handleDetailCart(productId){
  if(!Store.isLoggedIn()){showAuthGate('add to cart');return;}
  if(Cart.has(productId)){window.location.href='cart.html';return;}
  const qty=parseInt(document.getElementById('product-qty')?.value)||1;Cart.add(productId,qty);
  const btn=document.getElementById('detail-cart-btn');if(btn){btn.classList.add('in-cart');btn.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Go to Cart`;btn.onclick=()=>{window.location.href='cart.html';};}
}
function handleDetailWishlist(productId){
  if(!Store.isLoggedIn()){showAuthGate('wishlist items');return;}
  const added=Wishlist.toggle(productId);const btn=document.querySelector('.detail-wishlist-btn');if(!btn)return;btn.querySelector('svg')?.setAttribute('fill',added?'currentColor':'none');const label=btn.querySelector('span');if(label)label.textContent=added?'Wishlisted':'Wishlist';btn.classList.toggle('active',added);
}
function switchImg(thumb,src){document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));thumb.classList.add('active');const img=document.getElementById('main-product-img');if(img){img.style.opacity='0';setTimeout(()=>{img.src=src;img.style.opacity='1';},150);}}
function initImageZoom(){const wrap=document.getElementById('main-img-wrap'),img=document.getElementById('main-product-img');if(!wrap||!img)return;wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect();img.style.transformOrigin=`${((e.clientX-r.left)/r.width)*100}% ${((e.clientY-r.top)/r.height)*100}%`;img.style.transform='scale(1.28)';});wrap.addEventListener('mouseleave',()=>{img.style.transform='scale(1)';img.style.transformOrigin='center';});}
function renderNotFound(){const c=document.getElementById('product-detail');if(c)c.innerHTML=`<div class="not-found-state"><h2>Product Not Found</h2><p style="color:var(--muted)">This product may have been removed.</p><a href="products.html" class="btn btn-primary btn-pill" style="margin-top:14px">Browse All Products</a></div>`;}
