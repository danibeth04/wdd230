const menuBtn = document.querySelector('menuBtn');

// Toggle hamburger menu on/off
function toggleMenu() {
    document.getElementById('mainNav').classList.toggle('hide');
}
menuBtn.addEventListener('click', toggleMenu);