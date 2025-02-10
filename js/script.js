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
