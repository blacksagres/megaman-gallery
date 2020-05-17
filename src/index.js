import MainCanvas from "./components/main-canvas";
import "./styles/index.scss";

import "./components/game-selection";
import "./animations/show-controls";

const loadReloadIcon = () => {
  document
    .querySelector("#repeat-icon")
    .setAttribute("src", "./icons/repeat-icon.svg");
};

loadReloadIcon();
MainCanvas();
