class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.height * this.width;
    }
}

let r = new Rectangle(12, 2, 's');
console.log(r._height);