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

  document
    .querySelector("#animation-select")
    .addEventListener("change", (event) => {
      if (app.stage.children.length) app.stage.removeChildAt(0);
      const { value } = event.target;

      const appendEventsToAnimation = (animation) => {
        document
          .querySelector("#control-animation-loop")
          .addEventListener("change", (event) => {
            animation.loop = event.target.checked;
            animation.play();
          });
      };

      switch (value) {
        case "megaman-x-running": {
          megamanXRunning(app).then(appendEventsToAnimation);
          break;
        }
        case "megaman-x-starting": {
          megamanXStartStage(app).then(appendEventsToAnimation);
        }
      }
    });
}
