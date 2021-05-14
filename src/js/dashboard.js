"use strict";

(function () {
  console.log("Have a good day 🎈");

  //Toggle Mobile Sidebar
  var dashNav = document.querySelector("#dash-nav");
  if (dashNav !== null) {
    dashNav.addEventListener("click", () => {
      document.querySelector("aside").classList.toggle("show");
      dashNav.classList.toggle("show");
    });
  }

  /*for displaying date*/
  var n = new Date();
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";
  var r = weekdays[n.getDay()];
  var months = new Array(7);
  months[0] = "Jan";
  months[1] = "Feb";
  months[2] = "Mar";
  months[3] = "Apr";
  months[4] = "May";
  months[5] = "Jun";
  months[6] = "Jul";
  months[7] = "Aug";
  months[8] = "Sep";
  months[9] = "Oct";
  months[10] = "Nov";
  months[11] = "Dec";
  var m = months[n.getMonth()];
  var d = n.getDate();
  document.querySelector("#week").innerHTML = r;
  document.querySelector("#day").innerHTML = d;
  document.querySelector("#month").innerHTML = m;
})();
