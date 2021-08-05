// when i click left, mover slides to the left
// when i click right, mover slides to the right
// same thing with the indicators

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const indicators = document.querySelector(".carousel-pagination");
const current = indicators.querySelector(".current-indicator");

let counter = 1;
const amountToMove = carouselItems[0].clientWidth;

next.addEventListener("click", () => {
  console.log(current);

  if (counter < 3) {
    counter++;
    carousel.style.transform = `translateX(-${amountToMove * counter}px)`;
    console.log(counter);
  }
});

previous.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    carousel.style.transform = `translateX(-${amountToMove * counter}px)`;
    console.log(counter);
  }
});
