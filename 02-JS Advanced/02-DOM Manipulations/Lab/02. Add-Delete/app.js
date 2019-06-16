function addItem() {
    let text = document.getElementById('newText').value;
    let list = document.getElementById('items');

    let newListItem = document.createElement('li');
    newListItem.textContent = text + ' ';
    list.appendChild(newListItem);

    let deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', (ev) => ev.target.parentNode.remove());
    newListItem.appendChild(deleteBtn);
}