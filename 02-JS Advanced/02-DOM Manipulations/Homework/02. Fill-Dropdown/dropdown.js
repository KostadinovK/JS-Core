function addItem() {
    let menu = document.getElementById('menu');
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    if(newItemText.value !== '' && newItemValue.value !== ''){
        let option = document.createElement('option');
        option.textContent = newItemText.value;
        option.setAttribute('value', newItemValue.value);
        menu.appendChild(option);
        newItemText.value = '';
        newItemValue.value = '';
    }
}