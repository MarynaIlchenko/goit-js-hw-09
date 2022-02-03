const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const PROMPT_DELAY = 1000;
let colorChangeInterval = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function start() {
    colorChangeInterval = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }, PROMPT_DELAY);
};

function stop() {
    clearInterval(colorChangeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};