const startBtnColor = document.querySelector('[data-start]');
const stopBtnColor = document.querySelector('[data-stop]');
let timerId = null;

startBtnColor.addEventListener('click', startChangeBackgroundColor);

stopBtnColor.addEventListener('click', stopChangeBackgroundColor);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function startChangeBackgroundColor() {
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnColor.setAttribute('disabled', '');
};

function stopChangeBackgroundColor() {
  clearInterval(timerId);
  startBtnColor.removeAttribute('disabled');
};