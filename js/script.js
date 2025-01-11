//  ______________ Navbar Nav Links________________
 
let allItemsLinks = document.querySelectorAll(`#nav .nav-item a`);
for (let i = 0; i < allItemsLinks.length; i++) {
  allItemsLinks[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//  ______________ Search Overlay ________________
let searchOverlay = document.querySelector(".search-overlay"),
  searchBtnClose = document.querySelector(".search-overlay-btnClose");
// ===> function to Close OR Open Overlay Window
function showOverlay() {
  searchOverlay.style.display === "none"
    ? (searchOverlay.style.display = "block")
    : (searchOverlay.style.display = "none");
}
