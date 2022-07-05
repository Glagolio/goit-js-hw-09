import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let FIRST_DELAY;
let DELAY_STEP;
let AMOUNT;

form.addEventListener('submit', e => {
  e.preventDefault();
  FIRST_DELAY = form.delay.value;
  DELAY_STEP = form.step.value;
  AMOUNT = form.amount.value;
  form.reset()
  
  console.log(FIRST_DELAY)

})

 Notiflix.Notify.failure('Please choose a date in the future');


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};

