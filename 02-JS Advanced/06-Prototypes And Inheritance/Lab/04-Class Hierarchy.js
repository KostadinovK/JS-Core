function createHierarchy(){
    class Figure{
        constructor(){
            if (this.constructor === Figure) {
                throw new Error('Abstract class cannot be instantiated directly.'); 
            }
        }

        toString(){
            return `${this.constructor.name} - `;
        }
    }

    class Circle extends Figure{
        constructor(radius){
            super();
            this.radius = radius;
        }

        get area(){
            return Math.PI * (this.radius ** 2);
        }

        toString(){
            return super.toString() + `radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }

        toString(){
            return super.toString() + `width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure, Circle, Rectangle
    };
}

let classes = createHierarchy();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let r = new Rectangle(2, 2);
console.log(r.toString());
let c = new Circle(2);
console.log(c.toString());