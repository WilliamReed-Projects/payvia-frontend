// Menu déroulant
const menuBtn = document.getElementById('ph-menu-btn');
const dropdown = document.getElementById('ph-dropdown');
const overlay = document.getElementById('ph-overlay');

// Fonction dynamique pour placer le menu SOUS la bannière
function updateMenuTop() {
  const header = document.querySelector('.ph-header-bar');
  const banner = document.getElementById('product-banner');
  if (header && banner && dropdown) {
    const headerHeight = header.offsetHeight;
    const bannerHeight = banner.offsetHeight;
    dropdown.style.top = (headerHeight + bannerHeight) + 'px';
  }
}
window.addEventListener('resize', updateMenuTop);
window.addEventListener('DOMContentLoaded', updateMenuTop);

function openMenu() {
  updateMenuTop();
  dropdown.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  dropdown.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = "";
}

menuBtn.addEventListener('click', function(e) {
  if (dropdown.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});
overlay.addEventListener('click', closeMenu);

// Ferme menu avec ESC
document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") closeMenu();
});
