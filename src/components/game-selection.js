const gameSelection = document.querySelector("#game-select");

const games = [
  {
    value: "megaman-x",
    label: "Megaman X",
  },
  {
    value: 'megaman-x2',
    label: "Megaman X2 [SOON ™]"
  },
  {
    value: 'megaman-x3',
    label: 'Megaman X3 [SOON ™]'
  },
  {
    value: 'megaman-x3',
    label: 'Megaman X4 [SOON ™]'
  },
  
];

games.forEach((game) => {
  const option = document.createElement("option");
  option.value = game.value;
  option.innerText = game.label;

  gameSelection.appendChild(option);
});
