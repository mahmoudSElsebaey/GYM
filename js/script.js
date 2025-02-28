//  ______________ Pre loading Icon Animation________________
let preLoader = document.querySelector(".pre-loading");
window.addEventListener("load", function () {
  preLoader.style.display = "none";
});
//  ______________ Navbar Nav Links________________
let allItemsLinks = document.querySelectorAll(`#nav .nav-item a`);

allItemsLinks.forEach(
  (e) =>
    (e.onclick = function () {
      // remove active from all links
      allItemsLinks.forEach((e) => e.classList.remove("active"));
      // add active class to target element
      this.classList.add("active");
    })
);
//  ______________ Search Overlay ________________
let searchOverlay = document.querySelector(".search-overlay"),
  searchBtnClose = document.querySelector(".search-overlay-btnClose");
// ===> function to Close OR Open Overlay Window
function showOverlay() {
  searchOverlay.style.display === "none"
    ? (searchOverlay.style.display = "block")
    : (searchOverlay.style.display = "none");
}
//  ______________ Gallery Zoom Images  ______________ 
function showPopup(img) {
  document.getElementById("popup-img").src = img.src;
  document.getElementById("popup").style.display = "flex";
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target === this) {
    closePopup();
  }
});
//   ______________ Add Swiper in Our Team section  ______________ 
const swiper = new Swiper(".slides", {
  loop: true,
  speed: 1000,
  grabCursor: true,
  spaceBetween: 25,
  // freeMode: true,

  autoplay: {
    delay: 4000,
  },
  sticky: true,
  
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    990: {
      slidesPerView: 3,
    },
  },
});
