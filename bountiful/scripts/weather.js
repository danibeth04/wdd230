// select HTML elements in the document
const temp1 = document.querySelector('#temp1');
const icon1 = document.querySelector('#icon1');
const caption1 = document.querySelector('#caption1');
const humidity1 = document.querySelector('#humidity1');

const temp2 = document.querySelector('#temp2');
const icon2 = document.querySelector('#icon2');
const caption2 = document.querySelector('#caption2');
const humidity2 = document.querySelector('#humidity2');

const temp3 = document.querySelector('#temp3');
const icon3 = document.querySelector('#icon3');
const caption3 = document.querySelector('#caption3');
const humidity3 = document.querySelector('#humidity3');

// API url for Carlsbad, CA with units in Fahrenheit (imperial) and my API ID
const url = 'https://api.openweathermap.org/data/3.0/onecall?lat=33.158092&lon=-117.350594&units=imperial&limit=3&appid=ab2701079d14f2054e74a081b52368fc';

// Function to fetch API
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
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
    // Temp display
    temp1.innerHTML = `${weatherData.daily[0].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc1 = capitalize(weatherData.daily[0].weather[0].description);
    caption1.textContent = desc1;
    icon1.src = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    icon1.alt = desc1;
    // Humidity
    humidity1.innerHTML = `${weatherData.daily[0].humidity}`;

    // Temp display
    temp2.innerHTML = `${weatherData.daily[1].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc2 = capitalize(weatherData.daily[1].weather[0].description);
    caption2.textContent = desc2;
    icon2.src = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    icon2.alt = desc2;
    // Humidity
    humidity2.innerHTML = `${weatherData.daily[1].humidity}`;

    // Temp display
    temp3.innerHTML = `${weatherData.daily[2].temp.day.toFixed(0)}`;
    // Weather description and icon display
    const desc3 = capitalize(weatherData.daily[2].weather[0].description);
    caption3.textContent = desc3;
    icon3.src = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    icon3.alt = desc3;
    // Humidity
    humidity3.innerHTML = `${weatherData.daily[2].humidity}`;
    
}

apiFetch();