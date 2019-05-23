function executeCommands(commands){
    let arr = [];
    let numberToAdd = 1;

    for (const command of commands) {
        if(command === 'add'){
            arr.push(numberToAdd);
        }else{
            arr.pop();
        }

        numberToAdd++;
    }

    if(arr.length > 0){
        console.log(arr.join('\n'));
    }else{
        console.log('Empty');
    }
}

executeCommands(['add', 'add', 'add', 'add']);