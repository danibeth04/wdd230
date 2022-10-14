const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function() {
  let myItem = input.value;
  if (input.value != "") {

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.append(listText);
  listText.textContent = myItem;
  listItem.append(listBtn);
  listBtn.textContent = 	"\u274C";
  list.append(listItem);
  
  listBtn.addEventListener("click", function() {
    listItem.remove();
  })};
  input.focus();
  input.value = "";
});
