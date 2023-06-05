const date = new Date();

const renderCalendar = () => {
date.setDate(1);

const monthDays = document.querySelector('.days');

// Get last day of current month, where +1 sets the date to current month
// 0 gets the last day of the previous month
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Get last day of previous month
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

// Get the first day of the current month
const firstDayIndex = date.getDay();

// Get last day of the previous month
const lastDayIndex = new Date(date.getFullYear() + 1, 0).getDay();

// Get dates after the last day of the current month
const nextDays = 7 - lastDayIndex -1;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Get current month
document.querySelector('.date h1').innerHTML = months[date.getMonth()];

// Get current date as String
document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x +1}</div>`;
}

// Display days
for(let i = 1; i<= lastDay; i++) {
    if(i === new Date().getDate() && date.getMonth === new Date().getMonth()) {
        days += `<div class="today>${i}</div>`;
    } else {
    days += `<div>${i}</div>`;
    }
}

// Display the dates after last day of current month

for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
}
}


document.querySelector('.prev').addEventListener("click", () => {
    date.setMonth(date.getMonth()-1);
    renderCalendar();
});

document.querySelector('.next').addEventListener("click", () => {
    date.setMonth(date.getMonth()+1);
    renderCalendar();
});

renderCalendar();


