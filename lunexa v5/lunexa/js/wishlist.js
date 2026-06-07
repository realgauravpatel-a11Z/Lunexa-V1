// LUNEXA v5 — wishlist.js
const Wishlist={
  getAll(){return Store.getWishlist();},
  has(productId){return this.getAll().includes(parseInt(productId));},
  toggle(productId){
    const id=parseInt(productId);const items=this.getAll();const idx=items.indexOf(id);let added=false;
    if(idx>-1){items.splice(idx,1);Cart.showToast('Removed from wishlist');}else{items.push(id);added=true;Cart.showToast('Added to wishlist!');}
    Store.saveWishlist(items);this.updateBadge();this.syncAllIcons();return added;
  },
  updateBadge(){const c=this.getAll().length;const b=document.querySelector('.wishlist-badge');if(!b)return;b.textContent=c>9?'9+':c;b.style.display=c>0?'flex':'none';},
  syncAllIcons(){document.querySelectorAll('[data-wishlist-id]').forEach(btn=>{const id=parseInt(btn.dataset.wishlistId);const active=this.has(id);btn.classList.toggle('active',active);const svg=btn.querySelector('svg');if(svg)svg.setAttribute('fill',active?'currentColor':'none');});}
};
