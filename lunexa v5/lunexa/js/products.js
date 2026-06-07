// LUNEXA v5 — products.js
let currentCategory='all', currentSearch='';
document.addEventListener('DOMContentLoaded',()=>{
  const p=new URLSearchParams(window.location.search);
  if(p.get('cat'))currentCategory=p.get('cat');
  if(p.get('search')){currentSearch=p.get('search');const s=document.getElementById('products-search');if(s)s.value=currentSearch;}
  renderFilters();renderProducts();
  const si=document.getElementById('products-search');
  if(si){si.addEventListener('input',()=>{currentSearch=si.value.trim();document.getElementById('search-clear').style.display=currentSearch?'flex':'none';renderProducts();});}
});
function renderFilters(){
  const bar=document.getElementById('filter-bar');if(!bar)return;
  const cats=[{k:'all',l:'All Products'},{k:'electronics',l:'Electronics'},{k:'gadgets',l:'Gadgets'},{k:'accessories',l:'Accessories'}];
  bar.innerHTML=cats.map(c=>`<button class="filter-btn ${currentCategory===c.k?'active':''}" onclick="setCategory('${c.k}')">${c.l}</button>`).join('');
}
function setCategory(cat){currentCategory=cat;renderFilters();renderProducts();window.history.replaceState({},'',cat==='all'?'products.html':`products.html?cat=${cat}`);}
function renderProducts(){
  const grid=document.getElementById('products-grid'),empty=document.getElementById('empty-state'),rc=document.getElementById('result-count');
  const q=currentSearch.toLowerCase();
  let products=getActiveProducts();
  if(currentCategory!=='all')products=products.filter(p=>p.category===currentCategory);
  if(q)products=products.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)||p.description?.toLowerCase().includes(q));
  if(rc)rc.textContent=products.length?`${products.length} product${products.length===1?'':'s'}`:'';
  if(!products.length){if(grid)grid.innerHTML='';if(empty)empty.style.display='flex';return;}
  if(empty)empty.style.display='none';
  if(grid){grid.innerHTML=products.map((p,i)=>{const card=createProductCard(p);return card.replace('product-card','product-card card-animate-in" style="animation-delay:'+Math.min(i,12)*0.04+'s');}).join('');}
  Wishlist.syncAllIcons();
}
