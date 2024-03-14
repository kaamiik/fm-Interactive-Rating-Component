"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const rating = localStorage.getItem("rating"); // get the rating from localStorage
  const ratingMessage = document.querySelector(".thank-you__rating");
  ratingMessage.textContent = `You selected ${rating} out of 5`;
});
