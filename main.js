import Card from "./Card.js";
import Navigation from "./footer.js";

Navigation();

const wordCards = document.querySelectorAll('[data-js="wordCard"]');
console.log(wordCards);

wordCards.forEach((wordCard) => {
  Card(wordCard);
});

const main = document.querySelector('[data-js="home"]');

let cards = [];

const form = document.querySelector('[data-js="form"]');
const cardsContainer = document.querySelector('[data-js="cards"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const questionElement = form.elements.question;
  const answerElement = form.elements.answer;
  const tagsElement = form.elements.tags;

  const newCard = {
    question: questionElement.value,
    answer: answerElement.value,
    tags: tagsElement.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length),
  };

  cards = [newCard, ...cards];
  renderCards();

  event.target.reset();
  questionElement.focus();
});

function renderCards() {
  cardsContainer.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("li");
    cardElement.className = "question-card";
    cardElement.innerHTML = `
      <p>${card.question}</p>
      <p>${card.answer}</p>
      <ul role="list" class="card__tag-list">
        ${card.tags.map((tag) => `<li class="card__tag">${tag}</li>`).join("")}
      </ul>
  `;
    cardsContainer.append(cardElement);
  });
}
