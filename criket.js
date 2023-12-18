const hitBtn = document.getElementById('hitBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreDisplay = document.getElementById('score');
const ballsDisplay = document.getElementById('balls');
const highScoreDisplay = document.getElementById('highScore');

let score = 0;
let balls = 0;
let highScore = localStorage.getItem('cricketHighScore') || 0;

hitBtn.addEventListener('click', () => {
  score += Math.floor(Math.random() * 7); // Randomly generate the runs between 0 to 6
  balls++;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  score = 0;
  balls = 0;
  updateDisplay();
});

function updateDisplay() {
  scoreDisplay.textContent = score;
  ballsDisplay.textContent = balls;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('cricketHighScore', highScore);
    highScoreDisplay.textContent = highScore;
  }
}

highScoreDisplay.textContent = highScore;
updateDisplay();
