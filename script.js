const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');




const newYears = '14 May 2021';


function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYearsDate - currentDate) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    const daysRoundDown = Math.floor(days);
    const exionedDaysToHours = daysRoundDown * 24;
    const exionedDaysToMins = exionedDaysToHours * 60;
    const exionedDaysToSecs = exionedDaysToMins * 60;

    const remainingHours = Math.floor(hours - exionedDaysToHours);
    const exionedHoursToMins = (exionedDaysToHours + remainingHours) * 60;
    const exionedHoursToSecs = remainingHours * 60 * 60;

    const remainingMinutes = Math.floor(minutes - exionedHoursToMins);
    const exionedMinsToSecs = remainingMinutes * 60;

    totalExionedSecs = exionedDaysToSecs + exionedHoursToSecs + exionedMinsToSecs;


    const remainingSeconds = Math.floor(seconds - totalExionedSecs);

    const Seconds = remainingSeconds;
    const Minutes = remainingMinutes;
    const Hours = remainingHours;
    const Days = daysRoundDown;

    daysEl.innerHTML = Days;
    hoursEl.innerHTML = formatTime(Hours);
    minsEl.innerHTML = formatTime(Minutes);
    secondsEl.innerHTML = formatTime(Seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
