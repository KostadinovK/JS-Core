function solve() {
    initializeOptions();
    
    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', calculate);

    function calculate(){
        let input = document.getElementById('input');
        let convertOption = document.getElementById('selectMenuTo');
        let result = 0;
        if(input.value != '' && convertOption.value === 'binary'){
            result = decToBinConvert(Number(input.value));
        }else if(input.value != '' && convertOption.value === 'hexadecimal'){
            result = decToHexConvert(Number(input.value));
        }

        document.getElementById('result').value = result;
    }
    
    function initializeOptions(){
        let selectMenuTo = document.getElementById('selectMenuTo');
        let binaryOption = selectMenuTo.querySelector('option');
        binaryOption.value = 'binary';
        binaryOption.innerText = 'Binary';
        let hexOption = document.createElement('option');
        selectMenuTo.appendChild(hexOption);
        hexOption.value = 'hexadecimal';
        hexOption.innerText = 'Hexadecimal';
    }

    function decToBinConvert(number){
       return number.toString(2);
    }

    function decToHexConvert(number){
        return number.toString(16).toUpperCase();
    }
}

