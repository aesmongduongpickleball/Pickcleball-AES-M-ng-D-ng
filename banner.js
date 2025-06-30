let currentSlide = 0;
const slides = document.querySelectorAll(".banner-slide img");
const slideContainer = document.querySelector(".banner-slide");

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  slideContainer.style.transform = `translateX(-${currentSlide * 200}px)`;
},100);
