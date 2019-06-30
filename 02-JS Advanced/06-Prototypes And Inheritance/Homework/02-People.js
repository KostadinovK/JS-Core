function getPeoples(){
    class Employee{
        constructor(name, age){
            if(this.constructor === Employee){
                throw new Error("Abstract class");
            }

            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this._currentTask = 0; 
        }

        work(){
            if(this._currentTask >= this.tasks.length){
                this._currentTask = 0;
            }

            console.log(this.tasks[this._currentTask]);
            this._currentTask++;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} is working on a complicated task.`,
                        `${this.name} is taking time off work.`,
                        `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.tasks = [`${this.name} scheduled a meeting.`,
                        `${this.name} is preparing a quarterly report.`];
            this.dividend = 0;
        }

        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    return {Employee, Junior, Senior, Manager};
}

let {Employee, Junior, Senior, Manager} = getPeoples();
let j = new Junior('Kosta', 19);
j.work();
j.salary = 100;
console.log(j.salary);

let m = new Manager('Pan', 11);
m.salary = 1000;
console.log(m);