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

// class Car {
//   constructor(name, model) {
//     this.n = name;
//     this.m = model;
//   }
//   info() {
//     return `The Car ${this.n} that model is ${this.m}`;
//   }
// }

// class Motor extends Car {
//   #s;
//   constructor(name, model, speed) {
//     super(name, model);
//     this.#s = speed;
//   }
//   info() {
//     return `The Car ${this.n} that model is ${this.m} and speed ${this.s} km/h`;
//   }
// }

// let car1 = new Car("BMW", 2019);
// console.log(car1.info());

// let motor1 = new Motor("Hommer", 2016 , 15);
// console.log(motor1.info());

// console.log(car1.__proto__ === Car.prototype);