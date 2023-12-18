const gameBoard = document.getElementById('game-board');
const scoreValue = document.getElementById('score-value');
const boardSize = 20;
const cellCount = boardSize * boardSize;
let snake = [2, 1, 0];
let direction = 1;
let foodIndex = 0;
let intervalTime = 100;
let intervalId = 0;
let score = 0;

function createGameBoard() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gameBoard.appendChild(cell);
  }
}

function startGame() {
  snake.forEach(index => gameBoard.children[index].classList.add('snake'));
  generateFood();
  intervalId = setInterval(move, intervalTime);
}

function move() {
  if (isCollision()) {
    clearInterval(intervalId);
    alert('Game Over! Your score is ' + score);
    resetGame();
    return;
  }

  const tail = snake.pop();
  gameBoard.children[tail].classList.remove('snake');

  snake.unshift(snake[0] + direction);

  const snakeHead = snake[0];
  if (snakeHead === foodIndex) {
    gameBoard.children[foodIndex].classList.remove('food');
    snake.push(tail);
    generateFood();
    score += 1;
    scoreValue.textContent = score;
  }

  gameBoard.children[snakeHead].classList.add('snake');
}

function isCollision() {
  const hitLeftWall = (snake[0] % boardSize === 0 && direction === -1);
  const hitRightWall = (snake[0] % boardSize === boardSize - 1 && direction === 1);
  const hitTopWall = (snake[0] - boardSize < 0 && direction === -boardSize);
  const hitBottomWall = (snake[0] + boardSize >= cellCount && direction === boardSize);
  const hitSelf = snake.slice(1).includes(snake[0]);
  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall || hitSelf;
}

function generateFood() {
  do {
    foodIndex = Math.floor(Math.random() * cellCount);
  } while (snake.includes(foodIndex));

  gameBoard.children[foodIndex].classList.add('food');
}

function control(e) {
  switch (e.key) {
    case 'ArrowUp':
      if (direction !== boardSize) direction = -boardSize;
      break;
    case 'ArrowDown':
      if (direction !== -boardSize) direction = boardSize;
      break;
    case 'ArrowLeft':
      if (direction !== 1) direction = -1;
      break;
    case 'ArrowRight':
      if (direction !== -1) direction = 1;
      break;
  }
}

function resetGame() {
  clearInterval(intervalId);
  snake = [2, 1, 0];
  direction = 1;
  score = 0;
  scoreValue.textContent = score;
  gameBoard.innerHTML = '';
  createGameBoard();
  startGame();
}

document.addEventListener('keydown', control);
createGameBoard();
startGame();
