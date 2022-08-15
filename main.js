import Card from "./Card.js";
import Navigation from "./footer.js";

Navigation();

const wordCards = document.querySelectorAll('[data-js="wordCard"]');
console.log(wordCards);

wordCards.forEach((wordCard) => {
  Card(wordCard);
});

const main = document.querySelector('[data-page="home"]');

const riddles = [
  { question: "Was ist der Unterschied zwischen einer Ente?", answer: "tja" },
  { question: "Wie warm ist es über den Berg?", answer: "2Grad" },
  { question: "Ja?", answer: "nein" },
];

riddles.forEach((riddle) => {
  const questionCard = document.createElement("article");
  questionCard.classList.add("card");

  const question = document.createElement("h2");
  question.innerText = riddle.question;

  const button = document.createElement("button");
  button.classList.add("card__button");
  button.innerText = "show answer";
  button.setAttribute("data-js", "button");

  const answer = document.createElement("p");
  answer.classList.add("card__answer", "hidden");
  answer.innerText = riddle.answer;
  answer.setAttribute("data-js", "answer");

  questionCard.append(question, button, answer);
  main.append(questionCard);

  Card(questionCard);
});
