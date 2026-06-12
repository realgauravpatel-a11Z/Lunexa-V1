(function () {
  const KEY = "laVuerteWishlist";

  const read = () => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || [];
    } catch (error) {
      return [];
    }
  };

  const write = (items) => {
    localStorage.setItem(KEY, JSON.stringify(items));
    document.dispatchEvent(new CustomEvent("wishlist:changed", { detail: items }));
  };

  window.LVWishlist = {
    all: read,
    has(id) {
      return read().some((item) => item.id === id);
    },
    toggle(item) {
      const items = read();
      const exists = items.some((entry) => entry.id === item.id);
      write(exists ? items.filter((entry) => entry.id !== item.id) : [...items, item]);
      return !exists;
    },
    remove(id) {
      write(read().filter((item) => item.id !== id));
    },
    clear() {
      write([]);
    }
  };
})();
