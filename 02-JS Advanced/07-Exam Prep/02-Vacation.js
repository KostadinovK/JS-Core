class Vacation{
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren(){
        let children = 0;

        for (const key in this.kids) {
            for (const child of this.kids[key]) {
                children++;
            }
        }

        return children;
    }

    registerChild(name, grade, budget){
        if(this.budget > budget){
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if(!this.kids[grade]){
            this.kids[grade] = [];
        }

        if(this.kids[grade].includes(`${name}-${budget}`)){
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budget}`);
        return grade;
    }

    removeChild(name, grade){
        for(let i = 0;i < this.kids[grade].length; i++){
            let [childName, budget] = this.kids[grade][i].split('-');

            if(childName === name){
                this.kids[grade].splice(i, 1);
                return grade;
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString(){
        if(this.numberOfChildren === 0){
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let res = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
        for (const grade in this.kids) {
            res += `Grade: ${grade}\n`;
            this.kids[grade].forEach((child, index) => res += `${index + 1}. ${child}\n`);
        }

        return res;
    }
}

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

let output = vacation.toString();
console.log(output);