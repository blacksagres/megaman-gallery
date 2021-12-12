import * as PIXI from "pixi.js";
import { loadSprite } from "../sprite-sheet-loader";

export const megamanXStartStage = (pixiApp) => {
  return loadSprite({
    pixiApp,
    textureName: "megaman-x-start-stage",
    nrOfSprites: 12,
    resourcePath: `${window.location.origin}/sprites/megaman-x/megaman-x-start-stage.json`,
  });
};
