function getBalloons(){
    class Balloon{
        constructor(color, gasWeight){
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength){
            super(color, gasWeight);
            this.ribbon = [ribbonColor, ribbonLength];
        }

        get ribbon(){
            return this._ribbon;
        }

        set ribbon(args){
            this._ribbon = {};
            this._ribbon.color = args[0];
            this._ribbon.length = args[1];
        }
    }

    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text(){
            return this._text;
        }

        set text(v){
            this._text = v;
        }
    }

    return {
        Balloon, PartyBalloon, BirthdayBalloon
    };
}

let balloons = getBalloons();

let {Balloon, PartyBalloon, BirthdayBalloon} = balloons;

let b = new Balloon('black', 200);
let p = new PartyBalloon('black', 200, 2, 2);
console.log(p.ribbon);

let birthday = new BirthdayBalloon('black', 200, 2, 2, 'happy');
console.log(birthday.text);