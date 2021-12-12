import * as PIXI from "pixi.js";
import { loadSprite } from "../sprite-sheet-loader";

export const megamanXRunning = (pixiApp) => {
  return loadSprite({
    pixiApp,
    textureName: "megaman-x-running",
    nrOfSprites: 9,
    resourcePath:
      window.location.origin + "/sprites/megaman-x/megaman-x-running.json",
  });
};
