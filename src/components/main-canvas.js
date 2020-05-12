import * as PIXI from 'pixi.js';
import { megamanXStartStage } from '../animations/megaman-x/megaman-x-start-stage';

// https://www.piskelapp.com/p/agxzfnBpc2tlbC1hcHByEwsSBlBpc2tlbBiAgKC9_OjjCQw/edit
export default function MainCanvas() {
  const app =
    new PIXI.Application({
      height: window.innerHeight,
      width: window.innerWidth,
      view: document.querySelector('#main-canvas')
    });

  let animation = megamanXStartStage(app);


  document.querySelector('#control-animation-loop').addEventListener('change', (event) => {
    animation.loop = event.target.checked;
    animation.play();
  });

  

}
