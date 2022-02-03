import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timer {
    start() {
        const startTime = Date.now();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timeComponents = convertMs(deltaTime);
        }, 1000);
    },
};

timer.start();

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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// enableTime - Включает устройство выбора времени (default - false)
//time_24hr - Отображает устройство выбора времени в 24-часовом режиме без выбора AM/PM, если включено.
//defaultDate - Устанавливает первоначально выбранную дату (даты). 
//Если вы используете режим: "множественный" или календарь диапазонов, предоставьте массив объектов Date или 
//массив строк дат, которые соответствуют вашему формату даты.В противном случае вы можете предоставить один объект Date или строку даты.
// minuteIncrement - Регулировка шага для минутного ввода (вкл. прокрутку) (default 5)