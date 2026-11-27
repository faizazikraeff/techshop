# TechShop

Website toko komponen komputer (proyek belajar, dikerjakan 2 orang).
HTML, CSS, dan JavaScript. Tema gaming (gelap + neon), warna diatur di bagian `:root` pada `css/style.css`. Belum ada backend: data produk dummy, keranjang dan pesanan disimpan di `localStorage`.

## Cara menjalankan
Buka folder di VS Code, klik kanan `index.html`, pilih **Open with Live Server**.

## Halaman
| File | Isi |
|---|---|
| `index.html` | Beranda: hero, kategori, produk pilihan |
| `products.html` | Semua produk, cari, urutkan, filter kategori |
| `cart.html` | Keranjang (tambah, kurang, hapus) |
| `checkout.html` | Form pengiriman, ringkasan, buat pesanan |
| `contact.html` | Form kontak + info toko |

## Struktur folder
```
techshop/
├── *.html
├── css/style.css
├── js/
│   ├── data.js        # Data produk + nama kategori
│   ├── cart.js        # Logika keranjang
│   ├── layout.js      # Navbar & footer (edit sekali, semua halaman ikut)
│   ├── products.js    # Kartu produk, filter, urut
│   ├── cart-page.js   # Halaman keranjang
│   ├── checkout.js    # Halaman checkout
│   └── contact.js     # Form kontak
└── images/
    ├── logo.png, logo-nav.png, favicon.png
    └── products/      # Gambar produk
```

## Ganti gambar produk dengan foto asli
1. Taruh foto di `images/products/` (misal `ryzen-5600.jpg`)
2. Ubah `image` produk itu di `js/data.js`

## Aturan kerja bareng (Git)
1. Jangan kerja langsung di `main`. Buat branch: `git checkout -b fitur/nama-fitur`
2. Commit kecil dan jelas, contoh: `feat: tambah halaman checkout`
3. Push branch, lalu buat Pull Request di GitHub
4. Teman review dulu, baru merge ke `main`
5. Sebelum mulai kerja: `git pull origin main`

## Pembagian tugas (usulan)
| Orang A | Orang B |
|---|---|
| `index.html`, `products.html`, `js/products.js`, `js/data.js` | `cart.html`, `checkout.html`, `contact.html` |
| `css/style.css` bagian beranda dan produk | `js/cart.js`, `js/cart-page.js`, `js/checkout.js`, `js/contact.js` |

## Ide pengembangan
- [ ] Halaman detail produk
- [ ] Backend PHP + MySQL untuk produk dan pesanan
- [ ] Login admin untuk kelola produk
- [ ] Pembayaran asli (misal Midtrans)


## Catatan folder `.vscode`
Folder `.vscode` hanya berisi pengaturan editor (Live Server menggunakan port 5501). Folder ini boleh dihapus dan tidak menyimpan file CSS. File tampilan website berada terpisah di `css/style.css`, sedangkan setiap halaman HTML memanggilnya melalui `<link rel="stylesheet" href="css/style.css">`. Jika tampilan menjadi polos, pastikan folder `css` dan file `style.css` tetap ada di lokasi tersebut.
