// Store the URL of the JSON file
const requestURL = 'json/data.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject); // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
        business.forEach(showBusiness);
    });
    
function showBusiness(business) {
    // Create elements to add to document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('p');
    let membership = document.createElement('p');
    let established = document.createElement('p');
    let img = document.createElement('img');

    //change the textContent property of the h2 element to contain the business' name and info
    name.textContent = `${business.name}`
    address.textContent = `Address: ${business.address}`
    phone.textContent = `Phone: ${business.phone}`
    url.textContent = `Website: ${business.url}`
    membership.textContent = `Membership Tier: ${business.membership}`
    established.textContent = `Established: ${business.established}`
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values
    img.setAttribute('src', business.imagesrc)
    img.setAttribute('alt', `${business.name}`)
    img.setAttribute("loading", "lazy");

    // Add/append the section(card) with the h2 element
    card.appendChild(name)
    card.appendChild(address)
    card.appendChild(phone)
    card.appendChild(url)
    card.appendChild(membership)
    card.appendChild(established)
    card.appendChild(img)
    document.querySelector('div.cards').appendChild(card)
};