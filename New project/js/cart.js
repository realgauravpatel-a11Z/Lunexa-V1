(function () {
  const KEY = "laVuerteCart";
  const COUPON_KEY = "laVuerteCoupon";

  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (error) {
      return [];
    }
  };

  const write = (items) => {
    localStorage.setItem(KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("cart:changed", { detail: items }));
  };

  const emitToast = (message) => {
    document.dispatchEvent(new CustomEvent("toast", { detail: message }));
  };

  window.LVCart = {
    all: read,
    add(item, qty = 1) {
      const items = read();
      const existing = items.find((entry) => entry.id === item.id);
      if (existing) {
        existing.qty += qty;
      } else {
        items.push({ ...item, qty });
      }
      write(items);
      emitToast(`${item.name} added to your cart`);
    },
    update(id, qty) {
      const cleanQty = Math.max(1, Number(qty) || 1);
      write(read().map((item) => item.id === id ? { ...item, qty: cleanQty } : item));
    },
    remove(id) {
      write(read().filter((item) => item.id !== id));
      emitToast("Item removed from cart");
    },
    clear() {
      write([]);
    },
    coupon() {
      return localStorage.getItem(COUPON_KEY) || "";
    },
    setCoupon(code) {
      const normalized = String(code || "").trim().toUpperCase();
      if (["VUERTE10", "CAFE15", "DUBAI20"].includes(normalized)) {
        localStorage.setItem(COUPON_KEY, normalized);
        emitToast(`${normalized} applied`);
        document.dispatchEvent(new CustomEvent("coupon:changed"));
        return true;
      }
      localStorage.removeItem(COUPON_KEY);
      emitToast("Coupon not recognized");
      document.dispatchEvent(new CustomEvent("coupon:changed"));
      return false;
    },
    totals() {
      const items = read();
      const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
      const coupon = this.coupon();
      const rate = coupon === "DUBAI20" ? 0.2 : coupon === "CAFE15" ? 0.15 : coupon === "VUERTE10" ? 0.1 : 0;
      const discount = subtotal * rate;
      const delivery = subtotal > 80 || subtotal === 0 ? 0 : 7.5;
      const service = subtotal ? 4.25 : 0;
      return { subtotal, discount, delivery, service, total: subtotal - discount + delivery + service };
    }
  };
})();
