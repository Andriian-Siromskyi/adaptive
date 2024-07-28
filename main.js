document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChangeTransitionEnd: function () {
        const slides = document.querySelectorAll(".swiper-slide .circle");
        const prevButton = document.querySelector(".swiper-button-prev");
        const nextButton = document.querySelector(".swiper-button-next");

        slides.forEach((slide, index) => {
          if (index === this.realIndex) {
            slide.classList.add("active");
          } else {
            slide.classList.remove("active");
          }
        });
        if (this.realIndex === 0) {
          prevButton.classList.add("swiper-button-disabled");
          prevButton.disabled = true;
        } else {
          prevButton.classList.remove("swiper-button-disabled");
          prevButton.disabled = false;
        }

        const lastIndex = slides.length - 1;
        const softSkillsIndex = Array.from(slides).findIndex((slide) =>
          slide.textContent.includes("Soft Skills")
        );

        if (
          this.realIndex === softSkillsIndex ||
          this.realIndex === lastIndex
        ) {
          nextButton.classList.add("swiper-button-disabled");
          nextButton.disabled = true;
        } else {
          nextButton.classList.remove("swiper-button-disabled");
          nextButton.disabled = false;
        }
      },
    },
  });
  const initialSlide = document.querySelector(".swiper-slide .circle");
  if (initialSlide) {
    initialSlide.classList.add("active");
  }
  const prevButton = document.querySelector(".swiper-button-prev");
  prevButton.classList.add("swiper-button-disabled");
  prevButton.disabled = true;
});
