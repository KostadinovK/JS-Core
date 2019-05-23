function sortArray(arr){
    console.log(arr.sort(compare).join('\n'));

    function compare(a, b){
        a = a.toLowerCase();
        b = b.toLowerCase();
        
        if(a.length > b.length){
            return 1;
        }else if(a.length < b.length){
            return -1;
        }else{
            return a.localeCompare(b);
        }
    }
    
}



sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isaac', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['test', 'Deny', 'omen', 'Default']);
sortArray(['tet', 'ab']);