// =======================
// === EFek TRANSISI SAAT HALAMAN DIMUAT ===
// =======================
window.addEventListener("load", () => {
  document.body.classList.add("fade-in");
});

// =======================
// === TOGGLE MENU HAMBURGER (MOBILE) ===
// =======================
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// =======================
// === EFEK KLIK GELEMBUNG PADA NAV LINK ===
// =======================
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Hentikan navigasi default agar animasi jalan dulu

    link.classList.add("bubble");

    setTimeout(() => {
      link.classList.remove("bubble");
      // Setelah animasi, pindah ke href
      window.location.href = link.getAttribute("href");
    }, 400); // durasi animasi 400ms
  });
});

// =======================
// === SCROLL SPY (MENU AKTIF SESUAI POSISI SCROLL) ===
// =======================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // offset untuk navbar tinggi
    const sectionBottom = sectionTop + section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
      currentSectionId = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});
