const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;
const container = document.querySelector(".container");

upBtn.addEventListener("click", () => handler("up"));
downBtn.addEventListener("click", () => handler("down"));

sidebar.style.top = ` -${(slidesCount - 1) * 100}vh`;

let current = 0;

function handler(dir) {
  if (dir === "up") {
    current++;
    if (slidesCount === current) {
      current = 0;
    }
  } else if (dir === "down") {
    current--;
    if (current < 0) {
      current = slidesCount - 1;
    }
  }
  const heigth = container.clientHeight;
  sidebar.style.transform = `translateY(${current * heigth}px)`;
  mainSlide.style.transform = `translateY(-${current * heigth}px)`;
}
