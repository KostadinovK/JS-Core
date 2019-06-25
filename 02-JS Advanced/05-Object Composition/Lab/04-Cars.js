function solve(commands){

    let carBuilder = (() => {

        let cars = {};

        return {
            create: name => cars[name] = {},
            inherit: (child, parent) => Object.setPrototypeOf(cars[child], cars[parent]),
            set: (name, key, value) => cars[name][key] = value,
            print: (name) => {
                let props = [];

                for (const key in cars[name]) {
                    props.push(`${key}:${cars[name][key]}`);
                }

                console.log(props.join(', '));
            } 
        };
    })();

    for (const commandStr of commands) {
        let [command, ...args] = commandStr.split(' ');

        switch(command){
            case 'create':
                let object = args[0];
                carBuilder.create(object);

                if(args.length > 1){
                    let parent = args[2];
                    carBuilder.inherit(object, parent);
                }
                break;
            case 'set':
                let obj = args[0];
                let key = args[1];
                let value = args[2];

                carBuilder.set(obj, key, value);
                break;
            case 'print':
                let name = args[0];
                carBuilder.print(name);
                break;
        }
    }
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);