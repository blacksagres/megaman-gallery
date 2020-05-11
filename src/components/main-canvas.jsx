import React, { useState, useEffect } from "react";
import * as PIXI from "pixi.js";

// https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgKC9_OjjCQw/edit
export default function MainCanvas() {
  const [app] = useState(
    new PIXI.Application({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  );

  // https://pixijs.io/examples/index.html?s=basics&f=spritesheet.js&title=SpriteSheet%20Animation#/sprite/animatedsprite-jet.js
  const createMegamanSheet = () => {
    const frames = [];

    for (var i = 0; i <= 12; i++) {
      // magically works since the spritesheet was loaded with the pixi loader
      console.log(PIXI.Texture.from("megaman-x-start-stage" + i + ".png"));
      frames.push(PIXI.Texture.from("megaman-x-start-stage" + i + ".png"));
    }

    const sectionSprite = new PIXI.AnimatedSprite(frames);

    sectionSprite.scale.set(4);
    sectionSprite.anchor.set(0.5);
    sectionSprite.x = app.view.width / 2;
    sectionSprite.y = app.view.height / 2;

    const container = new PIXI.Container();
    app.stage.addChild(container);
    container.addChild(sectionSprite);

    sectionSprite.animationSpeed = 0.2;
    sectionSprite.loop = false;

    sectionSprite.buttonMode = true;
    sectionSprite.interactive = true;

    sectionSprite.play();
  };

  const doneLoading = () => {
    // https://www.youtube.com/watch?v=GKre-3pBQac
    // https://www.html5gamedevs.com/topic/25619-is-this-an-efficient-way-to-load-sprites/
    createMegamanSheet();
  };

  useEffect(() => {
    app.loader.add("../sprites/megaman-x/megaman-x-start-stage.json");
    app.loader.load(doneLoading);
  }, []);

  const appendCanvas = (div) => {
    if (!div) return;
    div.appendChild(app.view);
  };

  return (
    <>
      <div id="overlay-controls">
        <h1 style={{ color: "white" }}>FOORM</h1>
        <input type="text" />
      </div>
      <div
        className="main-canvas"
        style={{ position: "absolute" }}
        ref={appendCanvas}
      />
      ;
    </>
  );
}
