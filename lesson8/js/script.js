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

// Lazy load page
    let imagesToLoad = document.querySelectorAll('img[data-src]');
    const loadImages = (image) => {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.onload = () => {
        image.removeAttribute('data-src');
      };
    };    
    
    if('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((items, observer) => {
          items.forEach((item) => {
            if(item.isIntersecting) {
              loadImages(item.target);
              observer.unobserve(item.target);
            }
          });
        });
        imagesToLoad.forEach((img) => {
          observer.observe(img);
        });
      } else {
        imagesToLoad.forEach((img) => {
          loadImages(img);
        });
      }

// Adjust rating display on storm center page
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}