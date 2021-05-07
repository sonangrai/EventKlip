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

  //Phone Codes
  const input = document.querySelector("#phone");
  intlTelInput(input, {
    preferredCountries: ["np"],
    separateDialCode: true,
  });
  const input2 = document.querySelector("#phone-sign");
  intlTelInput(input2, {
    preferredCountries: ["np"],
    separateDialCode: true,
  });

  //Show Password
  let showPass = document.querySelector(".eye");
  let showPass2 = document.querySelector(".eye-signup");
  let passInp = document.querySelector("#password");
  let passInp2 = document.querySelector("#password-signup");
  showPass.addEventListener("click", () => {
    showPass.classList.toggle("show");
    if (passInp.type === "password") {
      passInp.type = "text";
    } else {
      passInp.type = "password";
    }
  });
  showPass2.addEventListener("click", () => {
    showPass2.classList.toggle("show");
    if (passInp2.type === "password") {
      passInp2.type = "text";
    } else {
      passInp2.type = "password";
    }
  });
})();
