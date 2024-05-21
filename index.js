const body = document.querySelector("body");
const thems = document.querySelector(".thems");
const startButton = document.querySelector('.btn-start');
const resetButton = document.querySelector('.btn-reset');
const timerDisplay = document.querySelector('.timer');
const scoreText = document.querySelector('.score-text-samp');
const cpsDisplay = document.querySelector('.item-el-text');

thems.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  if (body.classList.contains("darkmode")) {
  } else {
  }
});


let count = 0;
let bestScore = 0;
let timeLeft = 30;
let timer = null;
let gameActive = false;

startButton.addEventListener('click', function() {
  if (!gameActive && timeLeft > 0) {
    gameActive = true;
    this.textContent = '0';
    count = 0;
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    cpsDisplay.textContent = '0';
    timer = setInterval(function() {
      timeLeft--;
      timerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        startButton.textContent = 'End';
        startButton.disabled = true;
        const cps = (count / 30).toFixed(2);
        cpsDisplay.textContent = cps;
        if (count > bestScore) {
          bestScore = count;
          scoreText.textContent = bestScore;
        }
        gameActive = false;
      }
    }, 1000);
  } else if (gameActive) {
    count++;
    this.textContent = count;
  }
});

resetButton.addEventListener('click', function() {
  clearInterval(timer);
  startButton.textContent = 'Start';
  startButton.disabled = false;
  timerDisplay.textContent = '30';
  cpsDisplay.textContent = '0';
  count = 0;
  timeLeft = 30;
  gameActive = false;
});







  gameActive = false;
});
