const uncle = document.getElementById("uncle");
const input = document.getElementById("complimentInput");
const sendBtn = document.getElementById("sendBtn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");
const attemptsDisplay = document.getElementById("attempts");

let score = 0;
let attempts = 5;

const funnyWords = ["handsome", "legend", "boss", "funny", "smart", "hero", "cool"];

sendBtn.addEventListener("click", () => {
  const text = input.value.toLowerCase().trim();

  if (!text) {
    message.textContent = "Please write a compliment!";
    return;
  }

  attempts--;
  attemptsDisplay.textContent = attempts;

  let madeLaugh = funnyWords.some(word => text.includes(word));

  if (madeLaugh) {
    score++;
    scoreDisplay.textContent = score;
    uncle.textContent = "🤣";
    uncle.style.transform = "scale(1.2)";
    message.textContent = "Uncle is laughing! 😂";
  } else {
    uncle.textContent = "😐";
    uncle.style.transform = "scale(1)";
    message.textContent = "Uncle didn’t laugh. Try harder!";
  }

  input.value = "";

  if (score >= 3) {
    message.textContent = "🎉 You won! Uncle can't stop laughing!";
    sendBtn.disabled = true;
    input.disabled = true;
  } else if (attempts <= 0) {
    message.textContent = "😢 Game Over! Uncle stayed serious.";
    sendBtn.disabled = true;
    input.disabled = true;
  }
});
