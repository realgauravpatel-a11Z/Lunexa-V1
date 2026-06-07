// LUNEXA v5 — storage.js
const KEYS={USERS:'lunexa_users',CURRENT_USER:'lunexa_current_user',CART:u=>`lunexa_cart_${u||'guest'}`,WISHLIST:u=>`lunexa_wishlist_${u||'guest'}`,ORDERS:u=>`lunexa_orders_${u||'guest'}`,PRODUCTS:'lunexa_products_override',COOKIE_CONSENT:'lunexa_cookie_consent',COOKIE_PREFS:'lunexa_cookie_prefs',ADMIN_AUTH:'lunexa_admin_session'};
const Store={
  get(k,fb=null){try{const r=localStorage.getItem(k);return r!==null?JSON.parse(r):fb;}catch{return fb;}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true;}catch{return false;}},
  remove(k){localStorage.removeItem(k);},
  getUsers(){return this.get(KEYS.USERS,[]);},saveUsers(u){this.set(KEYS.USERS,u);},
  getUserById(id){return this.getUsers().find(u=>u.id===id)||null;},
  getUserByEmail(em){return this.getUsers().find(u=>u.email.toLowerCase()===em.toLowerCase())||null;},
  addUser(u){const us=this.getUsers();us.push(u);this.saveUsers(us);},
  updateUser(id,upd){const us=this.getUsers().map(u=>u.id===id?{...u,...upd}:u);this.saveUsers(us);const c=this.getCurrentUser();if(c&&c.id===id)this.set(KEYS.CURRENT_USER,{...c,...upd});},
  getCurrentUser(){return this.get(KEYS.CURRENT_USER,null);},
  setCurrentUser(u){this.set(KEYS.CURRENT_USER,u);},
  clearSession(){this.remove(KEYS.CURRENT_USER);},
  isLoggedIn(){return this.getCurrentUser()!==null;},
  getCart(uid){const id=uid||this.getCurrentUser()?.id||'guest';return this.get(KEYS.CART(id),[]);},
  saveCart(items,uid){const id=uid||this.getCurrentUser()?.id||'guest';this.set(KEYS.CART(id),items);},
  getWishlist(uid){const id=uid||this.getCurrentUser()?.id||'guest';return this.get(KEYS.WISHLIST(id),[]);},
  saveWishlist(ids,uid){const id=uid||this.getCurrentUser()?.id||'guest';this.set(KEYS.WISHLIST(id),ids);},
  getOrders(uid){const id=uid||this.getCurrentUser()?.id||'guest';return this.get(KEYS.ORDERS(id),[]);},
  addOrder(order,uid){const id=uid||this.getCurrentUser()?.id||'guest';const os=this.getOrders(id);os.unshift(order);this.set(KEYS.ORDERS(id),os);},
  getProductOverrides(){return this.get(KEYS.PRODUCTS,null);},setProductOverrides(p){this.set(KEYS.PRODUCTS,p);},
  getCookieConsent(){return this.get(KEYS.COOKIE_CONSENT,null);},setCookieConsent(v){this.set(KEYS.COOKIE_CONSENT,v);},
  getCookiePrefs(){return this.get(KEYS.COOKIE_PREFS,{essential:true,analytics:false,marketing:false});},
  setCookiePrefs(p){this.set(KEYS.COOKIE_PREFS,p);},
  getAdminSession(){return this.get(KEYS.ADMIN_AUTH,false);},setAdminSession(v){this.set(KEYS.ADMIN_AUTH,v);},clearAdminSession(){this.remove(KEYS.ADMIN_AUTH);}
};
const Auth={
  encodePassword(p){return btoa(p+'_lunexa_v5_devleadlabs');},
  verifyPassword(p,e){return this.encodePassword(p)===e;},
  generateId(){return 'usr_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);},
  generateOrderId(){return 'ORD-'+Date.now().toString(36).toUpperCase()+Math.random().toString(36).slice(2,5).toUpperCase();},
  generateTrackingId(){return 'TRK'+Math.random().toString(36).slice(2,10).toUpperCase();},
  signup(name,email,password){
    if(Store.getUserByEmail(email))return{success:false,error:'An account with this email already exists.'};
    const user={id:this.generateId(),name:name.trim(),email:email.trim().toLowerCase(),password:this.encodePassword(password),address:{street:'',city:'',state:'',zip:'',country:'IN'},createdAt:new Date().toISOString(),avatar:name.trim().charAt(0).toUpperCase()};
    Store.addUser(user);
    if(typeof syncToSheets==='function')syncToSheets('signup',{name:user.name,email:user.email,city:user.address.city,createdAt:user.createdAt});
    return{success:true,user};
  },
  login(email,password){
    const user=Store.getUserByEmail(email);
    if(!user)return{success:false,error:'No account found with this email.'};
    if(!this.verifyPassword(password,user.password))return{success:false,error:'Incorrect password. Please try again.'};
    const session={id:user.id,name:user.name,email:user.email,avatar:user.avatar};
    Store.setCurrentUser(session);return{success:true,user:session};
  },
  logout(){Store.clearSession();}
};
function showAuthGate(action='continue'){
  let overlay=document.getElementById('auth-gate-overlay');
  if(!overlay){
    overlay=document.createElement('div');overlay.id='auth-gate-overlay';overlay.className='auth-gate-overlay';
    overlay.innerHTML=`<div class="auth-gate-box"><button class="auth-gate-close" onclick="closeAuthGate()"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button><div class="auth-gate-icon"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h3 class="auth-gate-title">Sign in to continue</h3><p class="auth-gate-sub" id="auth-gate-msg">You need to sign in to continue.</p><div class="auth-gate-actions"><a href="login.html" class="auth-gate-btn-primary">Sign In to Lunexa</a><a href="signup.html" class="auth-gate-btn-secondary">Create Free Account</a></div></div>`;
    overlay.addEventListener('click',e=>{if(e.target===overlay)closeAuthGate();});document.body.appendChild(overlay);
  }
  const m=document.getElementById('auth-gate-msg');if(m)m.textContent=`Please sign in to ${action}.`;
  setTimeout(()=>overlay.classList.add('open'),10);document.body.style.overflow='hidden';
}
function closeAuthGate(){const o=document.getElementById('auth-gate-overlay');if(o){o.classList.remove('open');setTimeout(()=>o.remove(),300);}document.body.style.overflow='';}
function requireAuth(to='login.html'){if(!Store.isLoggedIn()){window.location.href=to+'?redirect='+encodeURIComponent(window.location.pathname+window.location.search);return false;}return true;}
