//Functions
const getWeekNumber = () => {
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);
    return weekNumber;
}

//Get DOM Elements
const thisWeek = document.querySelector("#this-week");
const weeksUntilEnd = document.querySelector("#weeks-until-end");

const weekNumber = getWeekNumber();
const weeksUntilEndOfYear = 52 - weekNumber;

thisWeek.textContent = weekNumber;
weeksUntilEnd.textContent = weeksUntilEndOfYear;