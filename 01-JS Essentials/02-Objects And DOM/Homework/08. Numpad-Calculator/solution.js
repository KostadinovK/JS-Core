function solve() {
    let expression = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.getElementsByClassName('clear')[0].addEventListener('click', () => {expression.textContent = ''; result.textContent = '';});

    [...document.querySelectorAll('.keys button')]
        .filter(b => b.value !== '=' && b.value !== 'Clear')
        .forEach(b => b.addEventListener('click', displayButton));

    document.querySelector('.keys button[value="="]').addEventListener('click', displayResult);

    function displayButton(event){
        let button = event.target;

        if(button.value === '+' || button.value === '-' || button.value === '/' || button.value === '*'){
            expression.textContent += ` ${button.value} `;
        }else{
            expression.textContent += button.value;
        }
    }

    function displayResult(){
        
        let expressionRegex = /(\d+(.\d+)?)\s[+/*-]\s(\d+(.\d+)?)/;
        let match = expression.textContent.match(expressionRegex);

        if(match){
            result.textContent = eval(expression.textContent);
        }else{
            result.textContent = 'NaN';
        }
    }
}