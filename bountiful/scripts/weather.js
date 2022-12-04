// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#icon');
const captionDesc = document.querySelector('figcaption');

// API url for Carlsbad, CA with units in Fahrenheit (imperial) and my API ID
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&limit=5&appid=2340469801d84310f9502eb72c4ba29c';

// Function to fetch API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

// Capitalize weather description
function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// Function to display data
function displayResults(weatherData) {
    // current temp display
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    // weather description and icon display
    const desc = capitalize(weatherData.weather[0].description);
    captionDesc.textContent = desc;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.alt = desc;
}

apiFetch();