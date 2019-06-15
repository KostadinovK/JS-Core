function printArgumentInfo(){
    let types = {};
    for (const argument of arguments) {
        if(!types[typeof argument]){
            types[typeof argument] = 0;
        }
        console.log(`${typeof argument}: ${argument}`);
        types[typeof argument]++;
    }

    Object.entries(types).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`${k} = ${v}`));
}

printArgumentInfo('cat', 42, function () { console.log('Hello world!'); });
printArgumentInfo({ name: 'bob'}, 3.333, 9.999);