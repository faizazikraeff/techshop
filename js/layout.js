// Navbar dan footer dibuat di sini, jadi cukup diedit satu kali untuk semua halaman.
const navLinks = [
  { href: "index.html", label: "Beranda" },
  { href: "products.html", label: "Produk" },
  { href: "contact.html", label: "Kontak" }
];

function renderHeader() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  const linksHtml = navLinks.map(function (link) {
    const active = link.href === currentPage ? "active" : "";
    return `<a href="${link.href}" class="${active}">${link.label}</a>`;
  }).join("");

  const cartActive = currentPage === "cart.html" ? "active" : "";

  document.getElementById("site-header").innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="logo"><img src="images/logo-nav.png" alt="TechShop"></a>
      <button class="menu-toggle" id="menu-toggle" aria-label="Buka menu">Menu</button>
      <nav id="main-nav">
        ${linksHtml}
        <a href="cart.html" class="cart-link ${cartActive}">Keranjang <span id="cart-count" class="cart-badge">0</span></a>
      </nav>
    </div>
  `;

  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("main-nav").classList.toggle("open");
  });
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="footer-inner">
      <p><strong>TechShop</strong> - komponen PC untuk build kamu.</p>
      <p>&copy; 2026 TechShop. Proyek belajar, semua data produk hanya contoh.</p>
    </div>
  `;
}

renderHeader();
renderFooter();
updateCartCount();
