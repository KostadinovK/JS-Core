function solve(){
    class ElectricalDevice{
        constructor(manufacturer){
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends ElectricalDevice{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends ElectricalDevice{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends ElectricalDevice{
        constructor(manufacturer, expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends ElectricalDevice{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            if(this.constructor === Computer){
                throw new Error('Abstract class');
            }
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(b){
            if(b.constructor !== Battery){
                throw new TypeError('Invalid battery type');
            }

            this._battery = b;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(k){
            if(k.constructor !== Keyboard){
                throw new TypeError('Invalid keyboard type');
            }

            this._keyboard = k;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(m){
            if(m.constructor !== Monitor){
                throw new TypeError('Invalid monitor type');
            }

            this._monitor = m;
        }
    }

    return {
        Keyboard, Monitor, Battery, Computer, Laptop, Desktop
    }
}