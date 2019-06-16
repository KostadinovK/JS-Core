function deleteByEmail() {
    let email = document.querySelector('input').value;
    let resultElement = document.getElementById('result');

    let tableRows = [...document.querySelectorAll('tr')].slice(1);
    let rowToRemove = tableRows.find((data) => data.querySelector('td:last-child').textContent === email);
    console.log(rowToRemove);
    if(rowToRemove){
        rowToRemove.remove();
        resultElement.textContent = 'Deleted';
    }else{
        resultElement.textContent = 'Not found.';
    }
}