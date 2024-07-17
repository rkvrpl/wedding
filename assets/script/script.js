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

const nawPoint = document.querySelectorAll(".nav-point");
for (let i = 0; i < nawPoint.length; i++) {
  nawPoint[i].addEventListener('click', function () {
    document.querySelector(".burger").classList.remove("active");
  document.querySelector(".nav").classList.remove("open");
  })
}
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
  document.querySelector(".hours").textContent = hours + ":";
  document.querySelector(".days").textContent = days + "/";
  setTimeout(timer, 60000);
}
window.onload = function () {
  timer();
};
