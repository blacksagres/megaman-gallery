import MainCanvas from "./components/main-canvas";
import "./styles/index.scss";

import "./components/game-selection";
import "./animations/show-controls";

import './wd-40/silly-silly-ios';

const loadReloadIcon = () => {
  document
    .querySelector("#repeat-icon")
    .setAttribute("src", "./icons/repeat-icon.svg");
};

loadReloadIcon();
MainCanvas();
