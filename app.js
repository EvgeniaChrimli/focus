document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow");
  const img = document.querySelector(".top_info-img");
  const svg = document.querySelector(".why_svg");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        arrow.classList.add("draw");
        img.classList.add("draw");
        svg.classList.add("draw");
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(arrow, img, svg);
});

const cards = document.querySelectorAll(".why_card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Найдём вложенные элементы именно в этом блоке
    const visible = card.querySelector(".why_card-visible");
    const active = card.querySelector(".why_card-active");

    // Скрываем visible, показываем active
    visible.classList.toggle("unvisible");
    active.classList.toggle("visible");
  });
});

const swiper = new Swiper("#swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  // spaceBetween: 136,
});
