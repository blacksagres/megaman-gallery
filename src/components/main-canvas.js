import * as PIXI from "pixi.js";
import { megamanXStartStage } from "../animations/megaman-x/megaman-x-start-stage";
import { megamanXRunning } from "../animations/megaman-x/megaman-x-running";

// https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgKC9_OjjCQw/edit
export default function MainCanvas() {
  const app = new PIXI.Application({
    height: window.innerHeight,
    width: window.innerWidth,
    view: document.querySelector("#main-canvas"),
  });

  // Resize function window
  const resize = () => {
    if (!app.stage.children.length) return;

    // Resize the renderer
    const currentSprite = app.stage.getChildAt(0);

    app.renderer.resize(window.innerWidth, window.innerHeight);
    // You can use the 'screen' property as the renderer visible
    // area, this is more useful than view.width/height because
    // it handles resolution
    currentSprite.position.set(app.screen.width / 2, app.screen.height / 2);
  };

  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", resize);

  const appendEventsToAnimation = (animation) => {
    // https://pixijs.download/dev/docs/PIXI.AnimatedSprite.html
    const repeatAnimationButton = document.querySelector(
      "#control-animation-repeat"
    );

    const loopAnimationCheckbox = document.querySelector(
      "#control-animation-loop"
    );

    // keep the loop toggle if animations change
    animation.loop = loopAnimationCheckbox.checked;

    repeatAnimationButton.addEventListener("click", () => {
      animation.gotoAndPlay(0);
    });

    // TODO: stop on specific frame?
    loopAnimationCheckbox.addEventListener("change", (event) => {
      const checked = event.target.checked;

      if (checked) repeatAnimationButton.classList.add("invisible");
      else repeatAnimationButton.classList.remove("invisible");

      animation.loop = event.target.checked;
      animation.play();
    });
  };

  const initializeAnimation = (animationName) => {
    if (app.stage.children.length) app.stage.removeChildAt(0);
    switch (animationName) {
      case "megaman-x-running": {
        megamanXRunning(app).then(appendEventsToAnimation);
        break;
      }
      case "megaman-x-starting": {
        megamanXStartStage(app).then(appendEventsToAnimation);
      }
    }
  };

  initializeAnimation(document.querySelector("#animation-select").value);

  document
    .querySelector("#animation-select")
    .addEventListener("change", (event) => {
      const { value } = event.target;
      initializeAnimation(value);
    });
}
