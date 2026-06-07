// LUNEXA v4 — product.js
const FAKE_REVIEWS=[
  {name:'Rahul M.',rating:5,date:'Mar 2025',text:'Absolutely incredible quality. Exceeded all my expectations — fast delivery too.',verified:true},
  {name:'Priya S.',rating:5,date:'Feb 2025',text:'Perfect product. Exactly as described. Build quality is top-notch.',verified:true},
  {name:'Arjun K.',rating:4,date:'Feb 2025',text:'Great value for money. Minor setup steps but overall fantastic purchase.',verified:true},
  {name:'Sneha R.',rating:5,date:'Jan 2025',text:'Bought as a gift and the recipient absolutely loves it. Will buy again!',verified:true},
  {name:'Vikram P.',rating:4,date:'Jan 2025',text:'Solid performance and sleek design. Does exactly what I needed.',verified:false}
];
document.addEventListener('DOMContentLoaded',()=>{
  const id=new URLSearchParams(window.location.search).get('id');
  const product=getProductById(id);
  if(!product){renderNotFound();return;}
  renderProduct(product);renderRelatedProducts(product);initImageZoom();
});
function renderProduct(product){
  document.title=`${product.name} — Lunexa`;
  const container=document.getElementById('product-detail');if(!container)return;
  const discount=Math.round(((product.oldPrice-product.price)/product.oldPrice)*100);
  const isWished=Wishlist.has(product.id),isInCart=Cart.has(product.id);
  const buyers=(product.reviews*0.8+800).toFixed(0);
  const ratingDist=[72,15,7,4,2];
  container.innerHTML=`
    <div class="product-gallery">
      <div class="product-main-img" id="main-img-wrap">
        <img id="main-product-img" src="${product.image}" alt="${product.name}" onerror="this.src='https://picsum.photos/seed/ln${product.id}/600/600'"/>
        ${discount>0?`<span class="detail-badge-discount">-${discount}% OFF</span>`:''}
      </div>
      <div class="product-thumbs">
        ${['a','b','c','d'].map((s,i)=>`<div class="thumb ${i===0?'active':''}" onclick="switchImage(this,'https://picsum.photos/seed/${product.id}${s}/600/600')"><img src="https://picsum.photos/seed/${product.id}${s}/120/120" alt="View ${i+1}"/></div>`).join('')}
      </div>
    </div>
    <div class="product-info">
      <div class="product-info-top">
        <span class="product-category-tag">${product.category}</span>
        <button class="detail-wishlist-btn ${isWished?'active':''}" data-wishlist-id="${product.id}" onclick="handleDetailWishlist(${product.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isWished?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          <span>${isWished?'Wishlisted':'Add to Wishlist'}</span>
        </button>
      </div>
      <h1 class="product-title">${product.name}</h1>
      <div class="product-rating-row">
        <div class="product-stars">${'★'.repeat(Math.floor(product.rating))}${product.rating%1>=0.5?'½':''}</div>
        <span class="product-rating-val">${product.rating}</span>
        <span class="product-reviews">${product.reviews.toLocaleString()} reviews</span>
        <span class="product-buyers">${parseInt(buyers).toLocaleString()}+ purchased</span>
      </div>
      <div class="product-pricing-row">
        <span class="product-price">${formatPrice(product.price)}</span>
        <span class="product-old-price">${formatPrice(product.oldPrice)}</span>
        ${discount>0?`<span class="product-savings">Save ${formatPrice(product.oldPrice-product.price)}</span>`:''}
      </div>
      <p class="product-description">${product.description}</p>
      <div class="product-specs">
        <h3>Key Specifications</h3>
        <div class="specs-grid">
          ${product.specs.map(s=>`<div class="spec-item"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>${s}</span></div>`).join('')}
        </div>
      </div>
      <div class="product-highlights">
        <h3>Highlights</h3>
        <ul class="highlight-list">
          <li>Premium build quality with rigorous quality control</li>
          <li>Compatible with leading platforms and accessories</li>
          <li>Energy-efficient design optimized for daily use</li>
          <li>Manufacturer warranty + Lunexa support included</li>
        </ul>
      </div>
      <div class="product-qty-row">
        <label>Quantity</label>
        <div class="qty-controls">
          <button onclick="changeQty(-1)">−</button>
          <input type="number" id="product-qty" value="1" min="1" max="99" readonly/>
          <button onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="product-actions">
        <button class="btn-add-cart ${isInCart?'in-cart':''}" id="detail-cart-btn" onclick="handleDetailAddToCart(${product.id})">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          ${isInCart?'Go to Cart':'Add to Cart'}
        </button>
        <a href="checkout.html" class="btn-buy-now" onclick="if(!Store.isLoggedIn()){event.preventDefault();showAuthGate('buy now');return;}if(!Cart.has(${product.id})){const q=parseInt(document.getElementById('product-qty').value)||1;Cart.add(${product.id},q);}">Buy Now</a>
      </div>
      <div class="trust-badges">
        <div class="trust-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span>Secure Checkout</span></div>
        <div class="trust-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg><span>Free Delivery</span></div>
        <div class="trust-badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg><span>Easy Returns</span></div>
      </div>
    </div>
    <div class="product-reviews-section">
      <h2 class="reviews-title">Customer Reviews</h2>
      <div class="reviews-overview">
        <div class="reviews-score">
          <div class="reviews-big-num">${product.rating}</div>
          <div class="reviews-big-stars">${'★'.repeat(Math.floor(product.rating))}${product.rating%1>=0.5?'½':''}</div>
          <div class="reviews-total">${product.reviews.toLocaleString()} reviews</div>
        </div>
        <div class="reviews-bars">
          ${ratingDist.map((pct,i)=>`<div class="review-bar-row"><span class="review-bar-label">${5-i} stars</span><div class="review-bar-track"><div class="review-bar-fill" style="width:${pct}%"></div></div><span class="review-bar-pct">${pct}%</span></div>`).join('')}
        </div>
      </div>
      <div class="reviews-list">
        ${FAKE_REVIEWS.map(r=>`<div class="review-card"><div class="review-header"><div class="review-avatar">${r.name.charAt(0)}</div><div><div class="review-name">${r.name}${r.verified?'<span class="review-verified">Verified Purchase</span>':''}</div><div class="review-meta"><span class="review-stars">${'★'.repeat(r.rating)}</span> · ${r.date}</div></div></div><p class="review-text">${r.text}</p></div>`).join('')}
      </div>
    </div>`;
  Wishlist.syncAllIcons();
}
function renderRelatedProducts(product){
  const c=document.getElementById('related-products');if(!c)return;
  const related=getActiveProducts().filter(p=>p.category===product.category&&p.id!==product.id).slice(0,4);
  if(!related.length){document.getElementById('related-section')?.remove();return;}
  c.innerHTML=related.map(createProductCard).join('');Wishlist.syncAllIcons();
}
function changeQty(delta){const inp=document.getElementById('product-qty');if(inp)inp.value=Math.max(1,Math.min(99,parseInt(inp.value)+delta));}
function handleDetailAddToCart(productId){
  if(!Store.isLoggedIn()){showAuthGate('add items to cart');return;}
  if(Cart.has(productId)){window.location.href='cart.html';return;}
  const qty=parseInt(document.getElementById('product-qty')?.value)||1;
  Cart.add(productId,qty);
  const btn=document.getElementById('detail-cart-btn');
  if(btn){btn.classList.add('in-cart');btn.innerHTML=`<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Go to Cart`;btn.onclick=()=>{window.location.href='cart.html';};}
}
function handleDetailWishlist(productId){
  if(!Store.isLoggedIn()){showAuthGate('save items to wishlist');return;}
  const added=Wishlist.toggle(productId);const btn=document.querySelector('.detail-wishlist-btn');if(!btn)return;
  btn.querySelector('svg')?.setAttribute('fill',added?'currentColor':'none');const label=btn.querySelector('span');if(label)label.textContent=added?'Wishlisted':'Add to Wishlist';btn.classList.toggle('active',added);
}
function switchImage(thumb,src){
  document.querySelectorAll('.thumb').forEach(t=>t.classList.remove('active'));thumb.classList.add('active');
  const img=document.getElementById('main-product-img');if(img){img.style.opacity='0';setTimeout(()=>{img.src=src;img.style.opacity='1';},150);}
}
function initImageZoom(){
  const wrap=document.getElementById('main-img-wrap'),img=document.getElementById('main-product-img');if(!wrap||!img)return;
  wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect();img.style.transformOrigin=`${((e.clientX-r.left)/r.width)*100}% ${((e.clientY-r.top)/r.height)*100}%`;img.style.transform='scale(1.32)';});
  wrap.addEventListener('mouseleave',()=>{img.style.transform='scale(1)';img.style.transformOrigin='center';});
}
function renderNotFound(){const c=document.getElementById('product-detail');if(c)c.innerHTML=`<div class="not-found-state"><h2>Product Not Found</h2><p style="color:var(--muted)">This product does not exist or may have been removed.</p><a href="products.html" class="btn btn-primary btn-pill" style="margin-top:16px">Browse All Products</a></div>`;}
