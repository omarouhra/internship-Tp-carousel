// when i click left, mover slides to the left
// when i click right, mover slides to the right
// same thing with the indicators

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const indicators = document.querySelectorAll(".carousel-pagination a");

next.addEventListener("click", () => {
  const currentSlide = carousel.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    const amountToMove = nextSlide.getBoundingClientRect().left;
    carousel.style.transform = `translateX(-${amountToMove}px)`;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
    console.log(amountToMove);
  }
});
 