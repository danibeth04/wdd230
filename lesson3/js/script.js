const yearOutput = document.querySelector('#year');
const date = new Date();
const year = date.getFullYear();
yearOutput.innerText = year;

const updateOutput = document.querySelector('#lastUpdate');
const update = new Date(document.lastModified);
updateOutput.innerText = update;