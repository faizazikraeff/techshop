// Data produk (dummy). Nanti bisa diganti ambil dari database lewat PHP.
// Untuk ganti gambar: taruh foto di images/products/ lalu ubah nama file di "image".
const categoryNames = {
  cpu: "Processor",
  gpu: "Kartu grafis",
  ram: "RAM",
  storage: "Penyimpanan",
  motherboard: "Motherboard",
  psu: "Power supply"
};

const products = [
  { id: 1, name: "AMD Ryzen 5 5600", category: "cpu", price: 1550000, image: "images/products/cpu-ryzen-5600.png", desc: "6 core 12 thread, pas untuk gaming budget." },
  { id: 2, name: "Intel Core i5-12400F", category: "cpu", price: 1950000, image: "images/products/cpu-i5-12400f.png", desc: "6 core, performa stabil, butuh GPU terpisah." },
  { id: 3, name: "RTX 3050 6GB", category: "gpu", price: 2650000, image: "images/products/MSI-GeForce-rtx-3050.png", desc: "Cukup untuk Valorant dan game esports lain." },
  { id: 4, name: "RX 6600 8GB", category: "gpu", price: 3300000, image: "images/products/gpu-rx-6600.png", desc: "VRAM 8GB, kuat main game 1080p." },
  { id: 5, name: "Kingston Fury 16GB DDR4 (2x8)", category: "ram", price: 650000, image: "images/products/ram-kingston-16gb.png", desc: "Dual channel 3200MHz." },
  { id: 6, name: "SSD NVMe 512GB", category: "storage", price: 480000, image: "images/products/Samsung 980 NVMe SSD 512GB Display.png", desc: "Booting dan loading game jadi lebih cepat." },
  { id: 7, name: "Motherboard B450M", category: "motherboard", price: 950000, image: "images/products/mobo-b450m.png", desc: "Socket AM4, cocok untuk Ryzen 5000." },
  { id: 8, name: "PSU 550W 80+ Bronze", category: "psu", price: 550000, image: "images/products/psu-550w.png", desc: "Daya cukup untuk build gaming menengah." }
];
