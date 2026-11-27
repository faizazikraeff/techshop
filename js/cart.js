// Logika keranjang. Dipakai di semua halaman.
const CART_KEY = "techshop-cart";
const SHIPPING_COST = 25000; // ongkir flat (dummy)

function formatRupiah(number) {
  return "Rp" + number.toLocaleString("id-ID");
}

function getCart() {
  const saved = localStorage.getItem(CART_KEY);
  return saved ? JSON.parse(saved) : [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function findProduct(productId) {
  return products.find(function (p) { return p.id === productId; });
}

function addToCart(productId) {
  const cart = getCart();
  const item = cart.find(function (i) { return i.id === productId; });

  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
}

function changeQty(productId, amount) {
  let cart = getCart();
  const item = cart.find(function (i) { return i.id === productId; });
  if (!item) return;

  item.qty += amount;
  if (item.qty <= 0) {
    cart = cart.filter(function (i) { return i.id !== productId; });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart().filter(function (i) { return i.id !== productId; });
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function getSubtotal() {
  return getCart().reduce(function (sum, item) {
    const product = findProduct(item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
}

function updateCartCount() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;

  const total = getCart().reduce(function (sum, i) { return sum + i.qty; }, 0);
  badge.textContent = total;
}
