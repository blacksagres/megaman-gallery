import * as PIXI from "pixi.js";

export const megamanXStartStage = (pixiApp) => {
  return new Promise((resolve, reject) => {
    const doneLoading = (loopAnimation) => {
      // https://www.youtube.com/watch?v=GKre-3pBQac
      // https://www.html5gamedevs.com/topic/25619-is-this-an-efficient-way-to-load-sprites/

      const frames = [];

      for (var i = 0; i <= 12; i++) {
        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.from("megaman-x-start-stage" + i + ".png"));
      }

      const sectionSprite = new PIXI.AnimatedSprite(frames);

      sectionSprite.scale.set(3);
      sectionSprite.anchor.set(0.5);
      sectionSprite.x = pixiApp.view.width / 2;
      sectionSprite.y = pixiApp.view.height / 2;

      pixiApp.stage.addChild(sectionSprite);

      sectionSprite.animationSpeed = 0.2;
      sectionSprite.loop = false;

      sectionSprite.play();
      resolve(sectionSprite);
    };

    const resource = "../../sprites/megaman-x/megaman-x-start-stage.json";
    if (!pixiApp.loader.resources[resource]) pixiApp.loader.add(resource);
    pixiApp.loader.load(doneLoading);
  });
};
