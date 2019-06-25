function solve(commands){
    let processor = (() => {
        let strings = [];

        return {
            add: (string) => strings.push(string),
            remove: (string) => strings = strings.filter(str => str !== string),
            print: () => console.log(strings.join(','))
        };
    })();

    for (const command of commands) {
        let [com, param] = command.split(' ');

        processor[com](param);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);