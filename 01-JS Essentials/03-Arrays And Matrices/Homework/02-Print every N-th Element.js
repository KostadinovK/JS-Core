function printNthElments(elements){
    let n = elements.pop();

    elements.forEach((e, i) => {
        if(i % n == 0){
            console.log(e);
        }
    });
}

printNthElments(['5', '20', '31', '4', '20', '2']);