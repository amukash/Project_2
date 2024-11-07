let currentSlide = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) currentSlide = 0;
  else if (n < 0) currentSlide = slides.length - 1;
  else currentSlide = n;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function moveSlide(n) {
  showSlide(currentSlide + n);
}

document.addEventListener("DOMContentLoaded", () => showSlide(currentSlide));
