import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  datetimePicker: document.querySelector('input#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
    let time = null;
refs.startBtn.disabled = false;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
 onClose(selectedDates) {
      const selectedDate = selectedDates[0];
     const startTime = Date.now();
       if (selectedDate < startTime) {
      Notify.failure('Please choose future date in the calendar');
      refs.startButton.disabled = true;
      return;
    // console.log(selectedDates[0]);
  },
};

refs.startBtn.addEventListener('click', startCountdown);

 function startCountdown() {
      refs.startBtn.disabled = true;
     refs.datetimePicker.disabled = true;
     
time = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
        }, 1000);
    }

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


// enableTime - Включает устройство выбора времени (default - false)
//time_24hr - Отображает устройство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
//defaultDate - Устанавливает первоначально выбранную дату (даты). 
//Если вы используете режим: "множественный" или календарь диапазонов, предоставьте массив объектов Date или 
//массив строк дат, которые соответствуют вашему формату даты.В противном случае вы можете предоставить один объект Date или строку даты.
// minuteIncrement - Регулировка шага для минутного ввода (вкл. прокрутку) (default 5)