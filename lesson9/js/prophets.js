// Store the URL of the JSON file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });
/*
async function getProphets() {
    const response = await fetch(requestURL);
    if (response.ok) {
    const data = await response.json();
    data.prophets.forEach(prophet => {
        displayProphets(prophet)
    });
};
*/
    
function displayProphets(prophet) {
    // Create elements to add to document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    //let birthDate = document.createElement('p');
    //let birthPlace = document.createElement('p');
    let img = document.createElement('img');

    //change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`
    //birthDate.textContent = `Date of Birth: ${prophet.birthdate}`
    //birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values
    img.setAttribute('src', prophet.imageurl)
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`)
    img.setAttribute("loading", "lazy");

    // Add/append the section(card) with the h2 element
    card.appendChild(h2)
    //card.appendChild(birthDate)
    //card.appendChild(birthPlace)
    card.appendChild(img)
    document.querySelector('div.cards').appendChild(card)
};