function coffeeStorage() {
    let commands = JSON.parse(document.querySelector('textarea').value);
    let [reportElement, inspectionElement] = document.querySelectorAll('p');

    let storage = {};

    for (const commandStr of commands) {
        let [command, ...commandArgs] = commandStr.split(', ');

        switch(command){
            case 'IN':
                addCoffee(commandArgs);
                break;
            case 'OUT':
                removeCoffee(commandArgs);
                break;
            case 'REPORT':
                report();
                break;
            case 'INSPECTION':
                inspect();
                break;
        }
    }

    function addCoffee(args){
        let [brand, coffee, date, quantity] = args;

        if(!storage[brand]){
            storage[brand] = {};
        }

        if(!storage[brand][coffee]){
            storage[brand][coffee] = {date, quantity: Number(quantity)};
        }

        if(storage[brand][coffee].date < date){
            storage[brand][coffee] = {date, quantity: Number(quantity)};
        }
    }

    function removeCoffee(args){
        let [brand, coffee, date, quantity] = args;
        quantity = Number(quantity);

        if(storage[brand] && storage[brand][coffee] && storage[brand][coffee].date > date && storage[brand][coffee].quantity >= quantity){
            storage[brand][coffee].quantity -= quantity;

            if(storage[brand][coffee] === 0){
                delete storage[brand][coffee];
            }
        }
    }

    function report(){
        Object.entries(storage).forEach(([brand, coffee]) => {
            let res = [];
            Object.entries(coffee).forEach(([name, info]) => res.push(`${name} - ${info.date} - ${info.quantity}.`));

            reportElement.innerHTML += `${brand}: ${res.join(' ')}<br>`;
        });
    }

    function inspect(){
        Object.entries(storage).sort((a, b) => a[0].localeCompare(b[0])).forEach(([brand, coffee]) => {
            let res = [];
            Object.entries(coffee).sort((a, b) => b[1].quantity-a[1].quantity).forEach(([name, info]) => res.push(`${name} - ${info.date} - ${info.quantity}.`));

            inspectionElement.innerHTML += `${brand}: ${res.join(' ')}<br>`;
        });
    }
}