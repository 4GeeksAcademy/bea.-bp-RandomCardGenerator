/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const limits = {
    min: 200,
    max: 500
  };

  const suitList = ["♦", "♥", "♠", "♣"];
  const redElements = ["♦", "♥"];
  const numberList = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  generateCard(suitList, numberList, redElements);

  const createCardButton = document.getElementById("new-card");

  const onClickEventNewButtonEventHandler = () =>
    generateCard(suitList, numberList, redElements);
  createCardButton.addEventListener("click", onClickEventNewButtonEventHandler);

  const widthInput = document.getElementById("card-width");
  const heightInput = document.getElementById("card-height");
  const card = document.getElementById("card-body");

  widthInput.addEventListener("input", e =>
    updateSide("width", card, e.target.value, limits)
  );

  heightInput.addEventListener("input", e =>
    updateSide("height", card, e.target.value, limits)
  );

  setInterval(() => generateCard(suitList, numberList, redElements), 10000);
};

const updateSide = (type, card, newValue, limits) => {
  const availableTypes = ["height", "width"];
  if (
    newValue <= limits.max &&
    newValue >= limits.min &&
    availableTypes.includes(type)
  )
    card.style[type] = newValue + "px";
};

const selectRandomItem = array =>
  array[Math.floor(Math.random() * array.length)];

const generateCard = (suitList, numberList, redElements) => {
  const selectedSuit = selectRandomItem(suitList);
  const selectedNumber = selectRandomItem(numberList);

  const numberDomElement = document.getElementById("card-number");
  numberDomElement.textContent = selectedNumber;

  const suitDomElements = document.getElementsByClassName("card-suit");

  const isRed = redElements.includes(selectedSuit);

  for (let i = 0; i < suitDomElements.length; i++) {
    suitDomElements[i].textContent = selectedSuit;
    suitDomElements[i].style.color = isRed ? "red" : "black";
  }
};
