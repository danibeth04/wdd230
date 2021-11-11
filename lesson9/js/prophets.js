// Store the URL of the JSON file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets']
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = `${prophet.name} ${prophet.lastname}`
            birthDate.textContent = `Date of Birth: ${prophet.birthdate}`
            birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`
            img.setAttribute('src', prophet.imageurl)
            img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`)

            card.appendChild(h2)
            card.appendChild(birthDate)
            card.appendChild(birthPlace)
            card.appendChild(img)
            document.querySelector('div.cards').appendChild(card)
        });
    })