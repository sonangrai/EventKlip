"use strict";

(function () {
  console.log("Have a good day 🎈");

  //Header COlor Adder
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("header").classList.add("sticked");
    } else {
      document.querySelector("header").classList.remove("sticked");
    }
  });

  //Nav
  var navTog = document.querySelector(".nav-icon");
  var mobBox = document.querySelector(".mob-menu");
  var close = document.querySelector(".close");
  navTog.addEventListener("click", () => {
    mobBox.classList.add("open");
  });
  close.addEventListener("click", () => {
    mobBox.classList.remove("open");
  });
})();
