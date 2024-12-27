// script.js
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const imageRow = document.querySelector(".image-row");

// Lebar scroll per klik
const scrollAmount = 300;

// Fungsi untuk scroll ke kiri
leftBtn.addEventListener("click", () => {
  imageRow.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

// Fungsi untuk scroll ke kanan
rightBtn.addEventListener("click", () => {
  imageRow.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

// Optional: Nonaktifkan tombol jika sudah di ujung (bisa ditambahkan jika perlu)
function updateButtons() {
  leftBtn.disabled = imageRow.scrollLeft <= 0;
  rightBtn.disabled =
    imageRow.scrollLeft + imageRow.clientWidth >= imageRow.scrollWidth;
}

imageRow.addEventListener("scroll", updateButtons);
updateButtons(); // Periksa posisi awal
