
const date = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const now = date.toLocaleString('en-GB', options);
document.getElementById("date").innerHTML = now;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

function pancakeBanner() {
    let banner;
    let dayOfWeek = new Date().getDay();
    if (dayOfWeek == 5) {
        banner = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
    }
    else {
        banner = ""
    }
    document.getElementById('pancake-banner').innerHTML = banner;
}