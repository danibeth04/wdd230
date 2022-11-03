// Toggle information for radio buttons on join page
const section = document.getElementById("descriptions");

function showDetails() {
    if(document.querySelector("#np").checked) {
        section.style.display = np()
    } else {
        section.style.display = "none";
    };

const radioButtons = document.querySelectorAll('input[name="membership"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
})};

function np() {
    
}