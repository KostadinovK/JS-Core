class Organization{
    constructor(name, budget){
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this.marketing = this.budget * 0.4;
        this.finance = this.budget * 0.25;
        this.production = this.budget * 0.35;
    }

    get departmentsBudget(){
        let marketing = this.marketing;
        let finance = this.finance;
        let production = this.production;

        return {
            marketing, finance, production
        };
    }

    add(employeeName, department, salary){
        if(this[department] >= salary){
            this[department] -= salary;

            this.employees.push({employeeName, department, salary});

            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        }

        return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this[department]}.`;
    }

    employeeExists(employeeName){
        if(this.employees.find(e => e.employeeName === employeeName)){
            let employee = this.employees.find(e => e.employeeName === employeeName);
            return `Mr./Mrs. ${employeeName} is part of the ${employee.department} department.`;
        }

        return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
    }

    leaveOrganization(employeeName){
        if(!this.employees.find(e => e.employeeName === employeeName)){
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }

        let index = this.employees.findIndex(e => e.employeeName === employeeName);
        
        this[this.employees[index].department] += this.employees[index].salary;
        this.employees.splice(index, 1);

        return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
    }

    status(){
        let res = `${this.name.toUpperCase()} DEPARTMENTS:\n`;

        let departments = ['marketing', 'finance', 'production'];
        for(let i = 0; i < departments.length; i++){
            res += `${departments[i][0].toUpperCase() + departments[i].slice(1)} | Employees: ${this.employees.reduce((sum, employee) => {
                if(employee.department === departments[i]){
                    sum++;
                }

                return sum;
            }, 0)}: ${[...this.employees.filter(e => e.department === departments[i])].reduce((str, employee, index) => {
                if(index != this.employees.filter(e => e.department === departments[i]).length - 1){
                    str += `${employee.employeeName}, `;
                }else{
                    str += `${employee.employeeName} `
                }

                return str;
            } ,'')}| Remaining Budget: ${this[departments[i]]}\n`;
        }

        return res.trim();
    }
}


let organization = new Organization('SoftUni', 20000);

console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'production', 2000));


console.log(organization.status());