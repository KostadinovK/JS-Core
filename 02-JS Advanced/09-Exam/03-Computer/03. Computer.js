class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace){
        if(this.hddMemory < requiredSpace){
            throw new Error("There is not enough space on the hard drive");
        }

        this.hddMemory -= requiredSpace;
        let program = {name, requiredSpace};
        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name){
        if(!this.installedPrograms.find(p => p.name === name)){
            throw new Error("Control panel is not responding"); 
        }

        let index = this.installedPrograms.findIndex(p => p.name === name);
        this.hddMemory += this.installedPrograms[index].requiredSpace;
        this.installedPrograms.splice(index, 1);

       
        return this.installedPrograms;
    }

    openAProgram(name){
        if(!this.installedPrograms.find(p => p.name === name)){
            throw new Error(`The ${name} is not recognized`); 
        }

        if(this.taskManager.find(p => p.name === name)){
            throw new Error(`The ${name} is already open`); 
        }

        let program = this.installedPrograms.find(p => p.name === name);

        let ramUsingPercents = (program.requiredSpace / this.ramMemory) * 1.5;

        let totalRamUsage = this.taskManager.reduce((sum, program) => {
            sum += program.ramUsage;
            return sum;
        }, 0);

        if(totalRamUsage + ramUsingPercents >= 100){
            throw new Error(`${program.name} caused out of memory exception`);
        }

        let cpuUsingPercents = ((program.requiredSpace / this.cpuGHz) / 500) * 1.5;

        let totalCpuUsage = this.taskManager.reduce((sum, program) => {
            sum += program.cpuUsage;
            return sum;
        }, 0);

        if(cpuUsingPercents + totalCpuUsage >= 100){
            throw new Error(`${program.name} caused out of cpu exception`);
        }

        let openedProgram = {name, ramUsage: ramUsingPercents, cpuUsage: cpuUsingPercents};
        this.taskManager.push(openedProgram);
        return openedProgram;
    }

    taskManagerView(){
        if(this.taskManager.length === 0){
            return `All running smooth so far`;
        }

        let res = ``;

        for (const program of this.taskManager) {
            res += `Name - ${program.name} | Usage - CPU: ${program.cpuUsage.toFixed(0)}%, RAM: ${program.ramUsage.toFixed(0)}%\n`;
        }

        return res.trim();
    }
}

