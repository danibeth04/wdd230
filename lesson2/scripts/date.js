const yearOutput = document.querySelector('#year');
const date = new Date();
const year = date.getFullYear();
yearOutput.innerText = year;

const lastUpdate = document.querySelector("#lastUpdate");
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
    lastUpdate.textContent = new Date().toLocaleDateString("en-US", options);
//en-US uses month-day-year order
//en-UK uses day-month-year order