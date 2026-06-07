// LUNEXA v4 — products.js
let currentCategory='all',currentSearch='';
document.addEventListener('DOMContentLoaded',()=>{readURLParams();renderFilterBar();renderProducts();bindSearchBar();});
function readURLParams(){
  const p=new URLSearchParams(window.location.search);
  currentCategory=p.get('cat')||'all';currentSearch=p.get('search')||'';
  const inp=document.getElementById('products-search');if(inp&&currentSearch){inp.value=currentSearch;document.getElementById('search-clear')&&(document.getElementById('search-clear').style.display='flex');}
  const h=document.getElementById('products-heading');if(h){if(currentSearch)h.textContent=`Results for "${currentSearch}"`;else if(currentCategory!=='all')h.textContent=currentCategory.charAt(0).toUpperCase()+currentCategory.slice(1);else h.textContent='All Products';}
}
function renderFilterBar(){
  const bar=document.getElementById('filter-bar');if(!bar)return;
  const filters=[{key:'all',label:'All Products'},{key:'electronics',label:'Electronics'},{key:'gadgets',label:'Gadgets'},{key:'accessories',label:'Accessories'}];
  bar.innerHTML=filters.map(f=>`<button class="filter-btn ${currentCategory===f.key?'active':''}" data-cat="${f.key}" onclick="setCategory('${f.key}')">${f.label}</button>`).join('');
}
function setCategory(cat){
  currentCategory=cat;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b.getAttribute('data-cat')===cat));
  renderProducts();const url=new URL(window.location);cat==='all'?url.searchParams.delete('cat'):url.searchParams.set('cat',cat);window.history.replaceState({},'',url);
  const h=document.getElementById('products-heading');if(h){if(currentSearch)h.textContent=`Results for "${currentSearch}"`;else if(cat!=='all')h.textContent=cat.charAt(0).toUpperCase()+cat.slice(1);else h.textContent='All Products';}
}
function bindSearchBar(){
  const input=document.getElementById('products-search'),clearBtn=document.getElementById('search-clear');if(!input)return;
  input.addEventListener('input',()=>{
    currentSearch=input.value.trim();if(clearBtn)clearBtn.style.display=currentSearch?'flex':'none';
    renderProducts();const h=document.getElementById('products-heading');if(h){if(currentSearch)h.textContent=`Results for "${currentSearch}"`;else if(currentCategory!=='all')h.textContent=currentCategory.charAt(0).toUpperCase()+currentCategory.slice(1);else h.textContent='All Products';}
    const url=new URL(window.location);currentSearch?url.searchParams.set('search',currentSearch):url.searchParams.delete('search');window.history.replaceState({},'',url);
  });
  input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';currentSearch='';if(clearBtn)clearBtn.style.display='none';renderProducts();}});
}
function renderProducts(){
  const grid=document.getElementById('products-grid'),empty=document.getElementById('empty-state');if(!grid)return;
  const results=filterProducts(currentCategory,currentSearch);
  const counter=document.getElementById('result-count');if(counter)counter.textContent=`${results.length} product${results.length!==1?'s':''}`;
  if(results.length===0){grid.innerHTML='';if(empty)empty.style.display='flex';return;}
  if(empty)empty.style.display='none';
  grid.innerHTML=results.map(createProductCard).join('');
  grid.querySelectorAll('.product-card').forEach((card,i)=>{card.style.animationDelay=`${i*35}ms`;card.classList.add('card-animate-in');});
  Wishlist.syncAllIcons();
}
