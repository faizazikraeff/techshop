// Menampilkan isi keranjang di cart.html
const cartItems = document.getElementById("cart-items");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutButton = document.getElementById("checkout-btn");

function renderCart() {
  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Keranjang masih kosong. <a href="products.html">Lihat produk</a></p>';
    cartSubtotal.textContent = formatRupiah(0);
    checkoutButton.classList.add("disabled");
    return;
  }

  checkoutButton.classList.remove("disabled");
  let html = "";

  cart.forEach(function (item) {
    const product = findProduct(item.id);
    if (!product) return;

    html += `
      <div class="cart-row">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${formatRupiah(product.price)}</p>
          <div class="cart-actions">
            <button class="qty-btn" data-action="minus" data-id="${product.id}" aria-label="Kurangi jumlah">-</button>
            <span>${item.qty}</span>
            <button class="qty-btn" data-action="plus" data-id="${product.id}" aria-label="Tambah jumlah">+</button>
            <button class="link-btn" data-action="remove" data-id="${product.id}">Hapus</button>
          </div>
        </div>
        <p class="cart-subtotal">${formatRupiah(product.price * item.qty)}</p>
      </div>
    `;
  });

  cartItems.innerHTML = html;
  cartSubtotal.textContent = formatRupiah(getSubtotal());
}

cartItems.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "plus") changeQty(id, 1);
  if (action === "minus") changeQty(id, -1);
  if (action === "remove") removeFromCart(id);

  renderCart();
});

renderCart();
