// const flatpickr = require("flatpickr");
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtnTimer = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let dateNow;
let selectedDate;

startBtnTimer.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        dateNow = Date.now()
        if (dateNow > selectedDates[0]) {
            window.alert('Please choose a date in the future');
            return;
        }
        startBtnTimer.removeAttribute('disabled')
        selectedDate = selectedDates[0];
        console.log(selectedDates[0]);

  },
};

flatpickr('#datetime-picker', options);

startBtnTimer.addEventListener('click', () => {
    setInterval(() => {
        const difTime = selectedDate - Date.now();
        const { days, hours, minutes, seconds } = convertMs(difTime);
        timerDays.textContent = days;
        timerHours.textContent = hours;
        timerMinutes.textContent = minutes;
        timerSeconds.textContent = seconds;
    }, 1000)
});


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

