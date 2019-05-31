function solve() {
    const letterCodeLength = 8;

    let input = document.getElementById('input').value;
    let resultBox = document.getElementsByClassName('boxes')[0];
    let resultElement = resultBox.querySelector('#resultOutput');
    
    let sum = [...input].reduce((sum, currentElement) => sum += Number(currentElement), 0);
    
    sum = sum % 9 || 9;
    
    input = input.substring(sum, input.length - sum);
    
    resultBox.style.display = 'flex';
    resultElement.textContent = input
        .split(/([\d]{8})/g)
        .map(x => String.fromCharCode(parseInt(x, 2)))
        .filter(c => /[a-zA-Z ]/g.test(c))
        .join('');
}