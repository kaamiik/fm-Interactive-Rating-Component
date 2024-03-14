"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   const rating = localStorage.getItem("rating"); // get the rating from localStorage
//   const ratingMessage = document.querySelector(".thank-you__rating");
//   ratingMessage.textContent = `You selected ${rating} out of 5`;
// });

const ratingMessage = document.querySelector(".thank-you__rating");
const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);
const rating = searchParams.get("rating");

ratingMessage.textContent = `You selected ${rating} out of 5`;
