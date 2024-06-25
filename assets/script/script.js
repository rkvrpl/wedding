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
    console.log("down");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("hide");
    console.log("up");
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
  document.querySelector(".hours").textContent = hours + '/';
  document.querySelector(".days").textContent = days + '/';
  setTimeout(timer, 60000);
}
window.onload = function () {
  timer()
}

//Слайдер дресскода

let offset = 0;
const sliderWomen = document.querySelector("#sliderWomen");
const sliderMen = document.querySelector("#sliderMen");

document
  .querySelector("#womenright")
  .addEventListener("click", function showNextImg() {
    offset = offset + 596;
    if (offset > 1192) {
      offset = 0;
    }
    sliderWomen.style.left = -offset + "px";
  });

document
  .querySelector("#womenleft")
  .addEventListener("click", function showPrevImg() {
    offset = offset - 596;
    if (offset < 0) {
      offset = 596;
    }
    sliderWomen.style.left = -offset + "px";
  });

document
  .querySelector("#menright")
  .addEventListener("click", function showNextImg() {
    offset = offset + 596;
    if (offset > 1192) {
      offset = 0;
    }
    sliderMen.style.left = -offset + "px";
  });

document
  .querySelector("#menleft")
  .addEventListener("click", function showPrevImg() {
    offset = offset - 596;
    if (offset < 0) {
      offset = 596;
    }
    sliderMen.style.left = -offset + "px";
  });
