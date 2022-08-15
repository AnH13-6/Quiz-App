import Card from "./Card.js";
import Navigation from "./footer.js";

Navigation();

const wordCards = document.querySelectorAll('[data-js="wordCard"]');
console.log(wordCards);

wordCards.forEach((wordCard) => {
  Card(wordCard);
});
