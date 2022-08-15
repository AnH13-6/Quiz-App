export default function Card(wordCard) {
  const show_answer = wordCard.querySelector('[data-js="show-answer"]');
  const answer = wordCard.querySelector('[data-js="answer"]');

  console.log("here", show_answer);

  show_answer.addEventListener("click", () => {
    console.log("clicked");
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      show_answer.textContent = "Show answer";
    } else {
      show_answer.textContent = "Hide answer";
    }
  });
  const bookmark_svg = wordCard.querySelector('[data-js="bookmark_svg"]');

  bookmark_svg.addEventListener("click", () => {
    bookmark_svg.classList.toggle("bookmark-fill");
  });
}
