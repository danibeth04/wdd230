const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function() {
  let myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.append(listText);
  listText.textContent = myItem;
  listItem.append(listBtn);
  listBtn.textContent = 	"\u274C";
  list.append(listItem);

  listBtn.onclick = function() {
    listItem.remove();
  }

  input.focus();
}
