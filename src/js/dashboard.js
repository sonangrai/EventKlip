"use strict";

(function () {
  console.log("Have a good day 🎈");

  var dashNav = document.querySelector("#dash-nav");
  dashNav.addEventListener("click", () => {
    document.querySelector("aside").classList.toggle("show");
    dashNav.classList.toggle("show");
  });
})();
