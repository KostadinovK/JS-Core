function addItem() {
    let text = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let newListItem = document.createElement('li');
    newListItem.textContent = text;
    list.appendChild(newListItem);
}