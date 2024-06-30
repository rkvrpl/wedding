"use strict";

//прячущийся headet
let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");
const scrollPosition = () => window.scrollY;
const containHide = () => header.classList.contains("hide");
window.addEventListener("scroll", () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
  }
  lastScroll = scrollPosition();
});

//burger
document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
});

// таймер
function timer() {
  let currentDate = new Date();
  let deadline = new Date(2024, 7, 9);
  const result = deadline - currentDate + 1000;
  if (result < 0) {
    const el = document.querySelector(".timer__container");
    el.innerHTML = `<div class='today'>Сегодня!</div>`;
    return undefined;
  }
  let minutes = Math.floor((result / 1000 / 60) % 60);
  let hours = Math.floor((result / 1000 / 60 / 60) % 24);
  let days = Math.floor(result / 1000 / 60 / 60 / 24);
  if (minutes < 10) minutes = "0" + minutes;
  if (hours < 10) hours = "0" + hours;
  document.querySelector(".minutes").textContent = minutes;
  document.querySelector(".hours").textContent = hours + "/";
  document.querySelector(".days").textContent = days + "/";
  setTimeout(timer, 60000);
}
window.onload = function () {
  timer();
};

//Women Slider

const imagesWomen = document.querySelectorAll("#sliderWomen img");
const sliderLineWomen = document.querySelector("#sliderWomen");
let countWomen = 0;
let widthWomen;

function initWomen() {
  widthWomen = document.querySelector(".dresscode__container").offsetWidth;
  sliderLineWomen.style.width = widthWomen * imagesWomen.length + "px";
  imagesWomen.forEach((item) => {
    item.style.width = widthWomen + "px";
    item.style.height = "auto";
  });
  rollSliderWomen();
}

initWomen();
window.addEventListener("load", initWomen);
window.addEventListener("resize", initWomen);

document.querySelector("#womenright").addEventListener("click", function () {
  countWomen++;
  if (countWomen >= imagesWomen.length) {
    countWomen = 0;
  }
  rollSliderWomen();
});

document.querySelector("#womenleft").addEventListener("click", function () {
  countWomen--;
  if (countWomen < 0) {
    countWomen = imagesWomen.length - 1;
  }
  rollSliderWomen();
});

function rollSliderWomen() {
  sliderLineWomen.style.transform =
    "translate(-" + countWomen * widthWomen + "px)";
}

// Men Slider
const imagesMen = document.querySelectorAll("#sliderMen img");
const sliderLineMen = document.querySelector("#sliderMen");
let countMen = 0;
let widthMen;

function initMen() {
  widthMen = document.querySelector(".dresscode__container").offsetWidth;
  sliderLineMen.style.width = widthMen * imagesMen.length + "px";
  imagesMen.forEach((item) => {
    item.style.width = widthMen + "px";
    item.style.height = "auto";
  });
  rollSliderMen();
}

initMen();
window.addEventListener("load", initMen);
window.addEventListener("resize", initMen);

document.querySelector("#menright").addEventListener("click", function () {
  countMen++;
  if (countMen >= imagesMen.length) {
    countMen = 0;
  }
  rollSliderMen();
});

document.querySelector("#menleft").addEventListener("click", function () {
  countMen--;
  if (countMen < 0) {
    countMen = imagesMen.length - 1;
  }
  rollSliderMen();
});

function rollSliderMen() {
  sliderLineMen.style.transform = "translate(-" + countMen * widthMen + "px)";
}
