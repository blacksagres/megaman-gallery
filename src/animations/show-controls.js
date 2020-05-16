import { gsap, Power3 } from "gsap";

const menuToggleButton = document.querySelector("#menu-toggle");
const controlsContainer = document.querySelector("#overlay-controls");

menuToggleButton.addEventListener("click", () => {
  gsap
    .timeline()
    .to(
      menuToggleButton,
      {
        opacity: 0,
        translateY: "-10px",
        ease: Power3.easeOut,
      },
      0
    )
    .to(
      controlsContainer,
      {
        opacity: 1,
        ease: Power3.easeIn,
      },
      0
    );
});
