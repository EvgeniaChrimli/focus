document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("card--flipped");
  });
});

const swiper = new Swiper("#swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
});

document.addEventListener("DOMContentLoaded", () => {
  const svgs = document.querySelectorAll("svg[data-animate]");

  svgs.forEach((svg) => {
    svg.classList.remove("animated");

    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.transition = "stroke-dashoffset 1.5s ease-out";
    });
  });

  function animateOnScroll() {
    svgs.forEach((svg) => {
      const rect = svg.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;

      if (isVisible && !svg.classList.contains("animated")) {
        svg.classList.add("animated");

        const paths = svg.querySelectorAll("path");
        paths.forEach((path) => {
          path.style.strokeDashoffset = "0";
        });
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // запуск при загрузке
});
