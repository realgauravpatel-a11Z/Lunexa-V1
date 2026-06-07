// LUNEXA v4 — wishlistpage.js
document.addEventListener('DOMContentLoaded',renderWishlistPage);
function renderWishlistPage(){
  const grid=document.getElementById('wishlist-grid'),empty=document.getElementById('empty-wishlist');if(!grid)return;
  const ids=Wishlist.getAll(),countEl=document.getElementById('wishlist-count');
  if(ids.length===0){grid.innerHTML='';if(empty)empty.style.display='flex';if(countEl)countEl.textContent='';return;}
  if(empty)empty.style.display='none';if(countEl)countEl.textContent=`${ids.length} item${ids.length!==1?'s':''}`;
  grid.innerHTML=ids.map(id=>getProductById(id)).filter(Boolean).map(createProductCard).join('');
  Wishlist.syncAllIcons();
}
const _origToggle=Wishlist.toggle.bind(Wishlist);
Wishlist.toggle=function(productId){const result=_origToggle(productId);if(document.getElementById('wishlist-grid'))renderWishlistPage();return result;};
