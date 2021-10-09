const date = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
const now = date.toLocaleString('en-GB', options);
document.getElementById("date").innerHTML = now;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
