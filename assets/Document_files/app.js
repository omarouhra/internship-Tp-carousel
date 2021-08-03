// when i click left, mover slides to the left
// when i click right, mover slides to the right
// same thing with the indicators

const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const indicators = document.querySelectorAll(".carousel-pagination a");

for (let i = 1; i < carouselItems.length; i++) {
  next.addEventListener("click", () => {
    const currentSlide = carousel.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.width;

    if (nextSlide) {
      currentSlide.classList.remove("current-slide");
      nextSlide.classList.add("current-slide");
      //   carousel.style.transform = `translateX(-${500 * i}px)`;
      console.log(i);
    }
  });
}
