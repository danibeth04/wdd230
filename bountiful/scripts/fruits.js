//Coding reference: https://www.codebyamir.com/blog/populate-a-select-dropdown-list-with-json

// Select all elements with class fruitOptions
let options = document.querySelector('fruitOptions');
options.length = 0;

// Append default option
let defaultOption = document.createElement('option');
defaultOption.text = 'Select Fruit';
options.add(defaultOption);
options.selectedIndex = 0;

// Store URL of JSON file
const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

// Get JSON data
fetch(url)  
  .then(function(response) {  
      return response.json();
  })
      // Create option element for each fruit and add to the selection list  
      .then(function(jsonObject) {  
        let option;
    	for (let i = 0; i < jsonObject.length; i++) {
          option = document.createElement('option');
      	  option.text = jsonObject[i].name;
      	  options.add(option);
    	}    
});  

