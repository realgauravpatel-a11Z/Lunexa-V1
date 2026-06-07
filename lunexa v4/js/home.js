// LUNEXA v4 — home.js
document.addEventListener('DOMContentLoaded',()=>{
  if(document.getElementById('featured-products'))renderFeaturedProducts();
  if(document.getElementById('category-grid'))renderCategoryHighlights();
  if(document.getElementById('new-arrivals'))renderNewArrivals();
  if(document.getElementById('trending-row'))renderTrendingProducts();
  if(document.getElementById('deals-ticker-inner'))renderDealsTicker();
  initHeroAnimation();initFlashTimer();
});
function initHeroAnimation(){const h=document.querySelector('.hero-content');if(h)setTimeout(()=>h.classList.add('visible'),80);}
function renderDealsTicker(){
  const el=document.getElementById('deals-ticker-inner');if(!el)return;
  const items=['Up to 40% Off on Electronics','Free Shipping above ₹999','New Gadgets Just Arrived','Extra 10% Off on Mobiles & Tablets','Genuine Products with Warranty','Exclusive Deals Every Week'];
  const html=items.map(i=>`<span class="ticker-item"><span class="ticker-dot"></span>${i}</span>`).join('');
  el.innerHTML=html+html;
}
function initFlashTimer(){
  const timer=document.getElementById('flash-timer');if(!timer)return;
  let total=5*3600+37*60+22;
  const tick=()=>{const h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60,f=n=>String(n).padStart(2,'0');timer.innerHTML=`<span class="timer-block">${f(h)}</span>:<span class="timer-block">${f(m)}</span>:<span class="timer-block">${f(s)}</span>`;if(total>0){total--;setTimeout(tick,1000);}};tick();
}
function renderFeaturedProducts(){
  const c=document.getElementById('featured-products');if(!c)return;
  const ids=[111,101,103,108,201,308,119,309];
  c.innerHTML=ids.map(id=>getProductById(id)).filter(Boolean).map(createProductCard).join('');
  Wishlist.syncAllIcons();
}
function renderCategoryHighlights(){
  const c=document.getElementById('category-grid');if(!c)return;
  const cats=[
    {key:'electronics',label:'Electronics',count:'20 Products',image:'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80'},
    {key:'gadgets',label:'Gadgets',count:'15 Products',image:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80'},
    {key:'accessories',label:'Accessories',count:'15 Products',image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80'}
  ];
  c.innerHTML=cats.map(cat=>`<a href="products.html?cat=${cat.key}" class="category-card"><img src="${cat.image}" alt="${cat.label}" loading="lazy"/><div class="category-card-overlay"><div class="category-card-label">${cat.label}</div><div class="category-card-count">${cat.count}</div><span class="category-card-cta">Shop Now <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></div></a>`).join('');
}
function renderNewArrivals(){
  const c=document.getElementById('new-arrivals');if(!c)return;
  const ids=[113,209,309,214];
  c.innerHTML=ids.map(id=>getProductById(id)).filter(Boolean).map(createProductCard).join('');
  Wishlist.syncAllIcons();
}
function renderTrendingProducts(){
  const c=document.getElementById('trending-row');if(!c)return;
  const products=getActiveProducts().filter(p=>p.rating>=4.7).slice(0,8);
  c.innerHTML=products.map(createProductCard).join('');
  Wishlist.syncAllIcons();
}
function createProductCard(product){
  const discount=Math.round(((product.oldPrice-product.price)/product.oldPrice)*100);
  const isWishlisted=Wishlist.has(product.id);
  return `<div class="product-card" onclick="goToProduct(${product.id})"><div class="card-image-wrap"><img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://picsum.photos/seed/ln${product.id}/600/600'"/>${discount>0?`<span class="card-badge-discount">-${discount}%</span>`:''}<button class="card-wishlist-btn ${isWishlisted?'active':''}" data-wishlist-id="${product.id}" title="Wishlist" onclick="handleWishlistToggle(event,${product.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="${isWishlisted?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button></div><div class="card-body"><div class="card-category">${product.category}</div><h3 class="card-name">${product.name}</h3><div class="card-rating"><span class="stars">★★★★★</span><span class="rating-value">${product.rating}</span><span class="rating-count">(${product.reviews.toLocaleString()})</span></div><div class="card-pricing"><span class="card-price">${formatPrice(product.price)}</span><span class="card-old-price">${formatPrice(product.oldPrice)}</span></div><button class="card-add-btn" onclick="handleAddToCart(event,${product.id})"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>Add to Cart</button></div></div>`;
}
function goToProduct(id){window.location.href=`product.html?id=${id}`;}
function handleAddToCart(event,productId){
  event.stopPropagation();
  if(!Store.isLoggedIn()){showAuthGate('add items to cart');return;}
  Cart.add(productId,1);
  const btn=event.currentTarget;btn.classList.add('added');
  btn.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Added!`;
  setTimeout(()=>{btn.classList.remove('added');btn.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>Add to Cart`;},1800);
}
function handleWishlistToggle(event,productId){
  event.stopPropagation();
  if(!Store.isLoggedIn()){showAuthGate('save items to wishlist');return;}
  const added=Wishlist.toggle(productId);const btn=event.currentTarget;const svg=btn.querySelector('svg');if(svg)svg.setAttribute('fill',added?'currentColor':'none');
}
