// Halaman checkout: ringkasan pesanan + simpan pesanan.
// Catatan: ini simulasi. Pesanan hanya disimpan di localStorage browser.
const summaryItems = document.getElementById("summary-items");
const checkoutForm = document.getElementById("checkout-form");
const checkoutLayout = document.getElementById("checkout-layout");
const emptyMessage = document.getElementById("empty-message");
const orderSuccess = document.getElementById("order-success");

function renderSummary() {
  const cart = getCart();

  if (cart.length === 0) {
    checkoutLayout.hidden = true;
    emptyMessage.hidden = false;
    return;
  }

  summaryItems.innerHTML = cart.map(function (item) {
    const product = findProduct(item.id);
    return `
      <div class="summary-row">
        <span>${product.name} x ${item.qty}</span>
        <span>${formatRupiah(product.price * item.qty)}</span>
      </div>
    `;
  }).join("");

  const subtotal = getSubtotal();
  document.getElementById("sum-subtotal").textContent = formatRupiah(subtotal);
  document.getElementById("sum-shipping").textContent = formatRupiah(SHIPPING_COST);
  document.getElementById("sum-total").textContent = formatRupiah(subtotal + SHIPPING_COST);
}

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const orderId = "TS" + Date.now().toString().slice(-8);
  const subtotal = getSubtotal();

  const order = {
    id: orderId,
    date: new Date().toISOString(),
    items: getCart(),
    customer: {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value
    },
    payment: document.getElementById("payment").value,
    total: subtotal + SHIPPING_COST
  };

  const orders = JSON.parse(localStorage.getItem("techshop-orders") || "[]");
  orders.push(order);
  localStorage.setItem("techshop-orders", JSON.stringify(orders));

  clearCart();
  checkoutLayout.hidden = true;
  document.getElementById("order-id").textContent = orderId;
  document.getElementById("order-total").textContent = formatRupiah(order.total);
  orderSuccess.hidden = false;
});

renderSummary();
