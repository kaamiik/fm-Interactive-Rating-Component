"use strict";

// Constant Variables
const formEl = document.querySelector(".feedback-form");
const inputEls = [...document.querySelectorAll(".feedback-form__button")];

// Uncheck all radio buttons when the page loads
window.onload = function () {
  inputEls.forEach((input) => {
    input.checked = false;
  });
};

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  inputEls.forEach((input) => {
    if (input.checked) {
      localStorage.setItem("rating", input.value);
      window.location.href = "thanks.html"; // redirect to thanks.html page
    }
  });
});
