import React, { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

// https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgKC9_OjjCQw/edit
export default function MainCanvas() {
  const [app] = useState(
    new PIXI.Application({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  );
  const [loopAnimation, setLoopAnimation] = useState(false);
  const mmxStartStageAnimation = useRef(null);
  

  const doneLoading = (loopAnimation) => {
    
    // https://www.youtube.com/watch?v=GKre-3pBQac
    // https://www.html5gamedevs.com/topic/25619-is-this-an-efficient-way-to-load-sprites/
    
    const frames = [];

    for (var i = 0; i <= 12; i++) {
      // magically works since the spritesheet was loaded with the pixi loader
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

    mmxStartStageAnimation.current = sectionSprite;
    sectionSprite.play();
  };

  useEffect(() => {
    if(!mmxStartStageAnimation.current) return;
    mmxStartStageAnimation.current.loop = loopAnimation;
    mmxStartStageAnimation.current.play();
  }, [loopAnimation])

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
        <label style={{ color: "white" }}>
          <input
            type="checkbox"
            onChange={(event) => setLoopAnimation(event.target.checked)}
          />
          <span style={{ marginLeft: ".5rem" }}>Loop animation</span>
        </label>
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
