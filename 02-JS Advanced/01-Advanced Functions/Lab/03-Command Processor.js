function commandProcessorInit(initial){
    let str = '';
    if(initial !== undefined){
        str = initial;
    }

    return {
        append: (string) => str += string,
        removeStart: (n) => str = str.slice(n),
        removeEnd: (n) => str = str.slice(0, str.length - n), 
        print: () => console.log(str) 
    };
}

let commandProcessor = commandProcessorInit('Hello');
commandProcessor.append(' World');
commandProcessor.print();
commandProcessor.removeStart(2);
commandProcessor.print();
commandProcessor.removeEnd(2);
commandProcessor.print();