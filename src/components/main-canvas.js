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

  megamanXStartStage(app).then((animation) => {
    document
      .querySelector("#control-animation-loop")
      .addEventListener("change", (event) => {
        animation.loop = event.target.checked;
        animation.play();
      });
  });
}
