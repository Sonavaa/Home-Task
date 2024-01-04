"use strict";

// Data
const numbers = "0123456789";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";

// DOM elements
const captchaText = document.getElementById("captcha__text");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

let chars = [];
let captcha = "";

const getRandomChar = () => {
  const mixedString = numbers.concat(upperCaseLetters, lowerCaseLetters);
  return mixedString[Math.floor(Math.random() * mixedString.length)];
};

const generateRandomCaptcha = () => {
  for (let i = 0; i < 6; i++) {
    captcha += getRandomChar();
  }
  captchaText.textContent = captcha;
};

generateRandomCaptcha();

input.addEventListener("input", (e) => {
  const givenValue = e.target.value;

  if (givenValue === captcha) {
    input.classList.add("ring-green-600");
    btn.classList.add("bg-green-500", "cursor-pointer");
  } else {
    input.classList.remove("ring-green-600");
    btn.classList.remove("bg-green-500", "cursor-pointer");
  }

  if (givenValue !== captcha && givenValue.length === 6) {
    input.classList.add("ring-red-600");
  } else {
    input.classList.remove("ring-red-600");
  }
});

input.addEventListener("keypress", (e) => {
    const givenValue = e.target.value;

  if (givenValue.length === 6) {
    e.preventDefault();
  }
});


btn.addEventListener("click", (e) => {
    if(btn.classList.contains("cursor-pointer")){
        window.location.reload();
    }
    else{
btn.style.disable = "true";
    }
});