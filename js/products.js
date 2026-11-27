// Dipakai di index.html (kategori + produk pilihan) dan products.html (semua produk).

function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-body">
        <p class="product-category">${categoryNames[product.category]}</p>
        <h3>${product.name}</h3>
        <p class="product-desc">${product.desc}</p>
        <p class="product-price">${formatRupiah(product.price)}</p>
        <button class="btn" data-id="${product.id}">Tambah ke keranjang</button>
      </div>
    </article>
  `;
}

function renderProducts(list, container) {
  if (list.length === 0) {
    container.innerHTML = "<p>Produk tidak ditemukan. Coba kata kunci atau kategori lain.</p>";
    return;
  }
  container.innerHTML = list.map(createProductCard).join("");
}

// Satu listener untuk semua tombol "Tambah ke keranjang"
function setupAddToCart(container) {
  container.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-id]");
    if (!button) return;

    addToCart(Number(button.dataset.id));
    button.textContent = "Ditambahkan";
    setTimeout(function () {
      button.textContent = "Tambah ke keranjang";
    }, 1000);
  });
}

// ---- Beranda ----
const categoryList = document.getElementById("category-list");
if (categoryList) {
  categoryList.innerHTML = Object.keys(categoryNames).map(function (key) {
    return `<a class="category-link" href="products.html?category=${key}">${categoryNames[key]}</a>`;
  }).join("");
}

const featuredList = document.getElementById("featured-list");
if (featuredList) {
  renderProducts(products.slice(0, 4), featuredList);
  setupAddToCart(featuredList);
}

// ---- Halaman produk ----
const productList = document.getElementById("product-list");
if (productList) {
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");
  const filters = document.getElementById("filters");

  // Kategori bisa dipilih lewat link, contoh: products.html?category=gpu
  const params = new URLSearchParams(location.search);
  let activeCategory = params.get("category") || "all";

  function renderFilters() {
    let html = `<button class="filter-btn" data-category="all">Semua</button>`;
    Object.keys(categoryNames).forEach(function (key) {
      html += `<button class="filter-btn" data-category="${key}">${categoryNames[key]}</button>`;
    });
    filters.innerHTML = html;
  }

  function applyFilter() {
    const keyword = searchInput.value.toLowerCase();

    let result = products.filter(function (p) {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      const matchName = p.name.toLowerCase().includes(keyword);
      return matchCategory && matchName;
    });

    if (sortSelect.value === "low") {
      result.sort(function (a, b) { return a.price - b.price; });
    } else if (sortSelect.value === "high") {
      result.sort(function (a, b) { return b.price - a.price; });
    }

    document.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.category === activeCategory);
    });

    renderProducts(result, productList);
  }

  filters.addEventListener("click", function (event) {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    activeCategory = button.dataset.category;
    applyFilter();
  });

  searchInput.addEventListener("input", applyFilter);
  sortSelect.addEventListener("change", applyFilter);

  renderFilters();
  applyFilter();
  setupAddToCart(productList);
}
