function solve() {
    let checkBtn = document.querySelector('tfoot button');
    let rows = document.querySelectorAll('tbody tr');
    let field = document.querySelector('table');
    let result = document.querySelector('#check p');
    checkBtn.addEventListener('click', checkSudomu);

    document.querySelectorAll('tfoot button')[1].addEventListener('click', () => {field.style.border = ''; result.textContent = ''; result.style.color = '';});

    function checkSudomu(){
        let valid = true;
        let values = [];
        
        for (let row of rows) {
            let rowValues = [];
            let cells = row.querySelectorAll('input');
            for (let cell of cells) {
                if(cell.value == ''){
                    valid = false;
                    break;
                }
               
                rowValues.push(Number(cell.value));
            }
            values.push(rowValues);

            if(!valid){
                break;
            }
        }

        if(valid){
            checkForSameDigitsOnEachRowsAndCols(values);
        }else{
            displayWrongResult();
        }
    }

    function displayWrongResult(){
        field.style.border = '2px solid red';
        result.textContent = 'NOP! You are not done yet...';
        result.style.color = 'red';
    }

    function displayCorrectResult(){
        field.style.border = '2px solid green';
        result.textContent = 'You solve it! Congratulations!';
        result.style.color = 'green';
    }

    function checkForSameDigitsOnEachRowsAndCols(values){
        let valid = true;

         //Checking for same digits on the rows
         for(let row = 0; row < values.length; row++){
            let alreadyPlacedDigits = [];
            for(let col = 0; col < values.length; col++){
                if(values[row][col] > 0 && values[row][col] <= values.length && !alreadyPlacedDigits.includes(values[row][col])){
                   alreadyPlacedDigits.push(values[row][col]); 
                }else{
                    valid = false;
                    break;
                }
            }

            if(!valid){
                break;
            }
        }

        //Checking for same digits on the cols
        for(let col = 0; col < values.length; col++){
            let alreadyPlacedDigits = [];
            for(let row = 0; row < values.length; row++){
                if(values[row][col] > 0 && values[row][col] <= values.length && !alreadyPlacedDigits.includes(values[row][col])){
                   alreadyPlacedDigits.push(values[row][col]); 
                }else{
                    valid = false;
                    break;
                }
            }

            if(!valid){
                break;
            }
        }

        if(valid){
            displayCorrectResult();
        }else{
            displayWrongResult();
        }
    }
}