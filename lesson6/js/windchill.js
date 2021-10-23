// Function to get temperature and windspeed, and calculate windchill
function windChill() {
    let windSpeed = document.getElementById("wind-speed");
    let highTemp = document.getElementById("high");

    if (windSpeed > 3 && highTemp < 50) {
        windChill = 35.74 + 0.6215 * highTemp - 35.75 * windSpeed ** 0.16 + 0.4275 * windspeed * highTemp ** 0.16;
    }
    else {
        windChill = "N/A";
    }
}
