// Add current date to footer
const date = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const now = date.toLocaleString('en-GB', options);
document.getElementById("date").innerHTML = now;

// Toggle hamburger meno on/off
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// Turn pancake banner on/off
    let banner = document.querySelector('#banner');
    let dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5) {
        banner.style.display = "block";
    }
