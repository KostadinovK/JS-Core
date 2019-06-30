function getElemelons(){
    let elements = ['Water', 'Fire', 'Earth', 'Air'];
    let elementIndex = 0;
    class Melon{
        constructor(weight, melonSort){
            if(this.constructor === Melon){
                throw new Error('Abstract class cannot be instantiated directly');
            }

            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return  `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return  `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return  `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon{
        constructor(weight, melonSort){
            super(weight, melonSort);
        }

        get elementIndex(){
            return this.weight * this.melonSort.length;
        }

        toString(){
            return  `Element: ${this.constructor.name.slice(0, -5)}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon{
        constructor(weight, melonSort){
            super(weight, melonSort);
            this.element = elements[elementIndex];
        }

        morph(){
            elementIndex++;
            if(elementIndex >= elements.length){
                elementIndex = 0;
            }

            this.element = elements[elementIndex];
        }

        toString(){
            return  `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
    
    return {
        Melon, Watermelon, Earthmelon, Firemelon, Airmelon, Melolemonmelon 
    };
}

getElemelons();