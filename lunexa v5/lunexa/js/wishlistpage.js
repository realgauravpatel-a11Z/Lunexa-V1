// LUNEXA v5 — wishlistpage.js
document.addEventListener('DOMContentLoaded',()=>{
  if(!Store.isLoggedIn()){showAuthGate('view wishlist');return;}
  renderWishlistPage();
});
function renderWishlistPage(){
  const ids=Wishlist.getAll(),grid=document.getElementById('wishlist-grid'),empty=document.getElementById('empty-wishlist'),count=document.getElementById('wishlist-count');
  if(count)count.textContent=ids.length?`${ids.length} item${ids.length===1?'':'s'}`:'';
  if(!ids.length){if(grid)grid.innerHTML='';if(empty)empty.style.display='flex';return;}
  if(empty)empty.style.display='none';
  if(grid)grid.innerHTML=ids.map(id=>{const p=getProductById(id);return p?createProductCard(p):'';}).join('');
  Wishlist.syncAllIcons();
}
