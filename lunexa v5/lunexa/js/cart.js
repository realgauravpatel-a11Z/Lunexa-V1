// LUNEXA v5 — cart.js
const Cart={
  getAll(){return Store.getCart();},
  getTotal(){return this.getAll().reduce((s,i)=>{const p=getProductById(i.productId);return s+(p?p.price*i.quantity:0);},0);},
  getCount(){return this.getAll().reduce((s,i)=>s+i.quantity,0);},
  has(productId){return this.getAll().some(i=>i.productId===parseInt(productId));},
  add(productId,qty=1){
    const items=this.getAll();const idx=items.findIndex(i=>i.productId===parseInt(productId));
    if(idx>-1){items[idx].quantity+=qty;}else{items.push({productId:parseInt(productId),quantity:qty});}
    Store.saveCart(items);this.updateBadge();this.showToast('Added to cart!');
  },
  remove(productId){const items=this.getAll().filter(i=>i.productId!==parseInt(productId));Store.saveCart(items);this.updateBadge();},
  updateQty(productId,qty){if(qty<1){this.remove(productId);return;}const items=this.getAll().map(i=>i.productId===parseInt(productId)?{...i,quantity:qty}:i);Store.saveCart(items);this.updateBadge();},
  clear(){Store.saveCart([]);this.updateBadge();},
  updateBadge(){const c=this.getCount();const b=document.querySelector('.cart-badge');if(!b)return;b.textContent=c>9?'9+':c;b.style.display=c>0?'flex':'none';},
  showToast(msg){
    let t=document.getElementById('cart-toast');if(!t){t=document.createElement('div');t.id='cart-toast';t.className='cart-toast';t.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span></span>';document.body.appendChild(t);}
    t.querySelector('span').textContent=msg;t.classList.add('show');clearTimeout(t._hide);t._hide=setTimeout(()=>t.classList.remove('show'),2400);
  }
};
