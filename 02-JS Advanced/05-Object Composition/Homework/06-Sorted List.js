function createSortedList(){
    let numbers = [];
    
    function sort(){
        numbers = numbers.sort((a, b) => a - b);
    }

    return {
        size: numbers.length,
        add: function(num){
            numbers.push(num);
            this.size++;
            sort();
        },
        remove: function(index){
            if(index < 0 || index >= numbers.length){
                throw new Error('Invalid index');
            }
    
            numbers.splice(index, 1);
            this.size--;
            sort();
        },
        get: function(index){
            if(index < 0 || index >= numbers.length){
                throw new Error('Invalid index');
            }
    
            return numbers[index];
        }
    };
}

let list = createSortedList();
list.add(1);
list.add(2);
console.log(list);