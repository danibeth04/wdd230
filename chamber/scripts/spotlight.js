// Store the URL of the JSON file
const requestURL = 'json/data.json';
let numSpots = 3;

// Get JSON data
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
         //console.table(jsonObject); // checking for valid response and data parsing
        const business = jsonObject['business'];
        // Filter by gold status
        let gold = business.filter(tier => tier.membership == 'Gold');
        //console.table(gold); // check whether filter is working as it should
        spotlight(gold,numSpots);
    });

// Select 3 random businesses to spotlight
function spotlight(gold, numSpots) {
    //Select one spotlight: let spots = gold[Math.floor(Math.random() * gold.length)];
    // Select multiple businesses to spotlight (Resource: https://bobbyhadz.com/blog/javascript-get-multiple-random-elements-from-array)
    let shuffled = [...gold].sort(() => 0.5 - Math.random());
    let spots = shuffled.slice(0,numSpots);
    // Call display function
    display(spots);
}

// Create and display spotlight cards for selected business
function display(spots) {
    // Create elements to add to document
    let card = document.createElement('div');
    let name = document.createElement('h4');
    let phone = document.createElement('p');
    let logo = document.createElement('img');

    //change the textContent property of the h4 and p elements to contain the business' names and phone numbers
    name.textContent = spots.name;
    phone.textContent = spots.phone;
    
    // Build the image attributes
    logo.src = spots.imagesrc;
    logo.alt = spots.name;

    // Append the section card
    card.appendChild(logo);
    card.appendChild(name);
    card.appendChild(phone);
    document.querySelector('div.spotCards').appendChild(card);
}
