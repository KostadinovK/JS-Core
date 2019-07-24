const helper = function(){
    const parseData = function(data){
        data = data.split(', ');

        let arr = data.reduce((arr, town) => {
            arr.push({town});
            return arr;
        },[]);

        return arr;
    };

    return {
        parseData
    };
}();