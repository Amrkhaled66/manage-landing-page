"use strict";

// ============================= Menu =============================
const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropMenu = document.getElementById("dropMenu");
hamburgerBtn.addEventListener("click", () => {
  dropMenu.classList.toggle("-translate-y-40");
  dropMenu.classList.toggle("opacity-0");
  hamburgerBtn.getAttribute("src") == "images/icon-hamburger.svg"
    ? (hamburgerBtn.src = "images/icon-close.svg")
    : (hamburgerBtn.src = "images/icon-hamburger.svg");
});

// ============================= sliders =============================
const circles = document.getElementById("circles");
const allSlides = document.querySelectorAll("#slide");
const allCircles = document.querySelectorAll(".circle");
let currSlide;

const gotoslide = (slide) => {
  currSlide = slide;
  allSlides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
const activateCircles = (circle) => {
  allCircles.forEach((c) => {
    if (c.dataset.slide != circle) {
      c.style.background = "rgb(169, 169, 169)";
    } else {
      c.style.background = "hsl(12, 88%, 59%)";
    }
  });
};

circles.addEventListener("click", (e) => {
  const tar = e.target;
  if (tar.classList.contains("circle")) {
    activateCircles(tar.dataset.slide);
    gotoslide(tar.dataset.slide);
  }
});
const initSlide = () => {
  activateCircles(0);
  gotoslide(0);
};

const nextSlide = () => {
  if (currSlide == allSlides.length - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  gotoslide(currSlide);
  activateCircles(currSlide);
};
const prevSlide = () => {
  if (currSlide == 0) {
    currSlide = allSlides.length - 1;
  } else {
    currSlide--;
  }
  gotoslide(currSlide);
  activateCircles(currSlide);
};

document.addEventListener("keydown", (e) => {
  if (document.documentElement.scrollWidth <= 768) {
    if (e.keyCode == 39) {
      nextSlide();
    } else if (e.keyCode == 37) {
      prevSlide();
    }
  }
});

window.addEventListener("resize", () => {
  if (document.documentElement.scrollWidth < 768) {
    initSlide();
  }
  else {
    allSlides.forEach(s => {
      s.style.transform = `translateX(0%)`
    })
  }
})
