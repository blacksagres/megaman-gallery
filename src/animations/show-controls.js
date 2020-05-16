import { gsap, Power3 } from "gsap";

const menuToggleButton = document.querySelector("#menu-toggle");
const menuButtons = document.querySelectorAll(".menu-button");
const controlsContainer = document.querySelector("#overlay");
const closeControlsPanel = document.querySelector("#close-controls-panel");

closeControlsPanel.addEventListener("click", () => {
  gsap
    .timeline()
    .to(controlsContainer, {
      opacity: 0,
      ease: Power3.easeIn,
      duration: 0.3,
    })
    .fromTo(
      menuButtons,
      {
        translateY: "-10px",
      },
      {
        opacity: 1,
        translateY: "0",
        ease: Power3.easeIn,
        zIndex: 2,
        duration: 0.3,
      }
    );
});

menuToggleButton.addEventListener("click", () => {
  gsap
    .timeline()
    .to(menuButtons, {
      opacity: 0,
      translateY: "-10px",
      ease: Power3.easeIn,
      zIndex: 0,
    })
    .fromTo(
      controlsContainer,
      {
        translateY: "10px",
        ease: Power3.easeIn,
      },
      {
        translateY: "0px",
        opacity: 1,
        ease: Power3.easeIn,
      }
    );
});
