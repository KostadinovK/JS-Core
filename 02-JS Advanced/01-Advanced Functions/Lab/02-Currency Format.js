function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

/*Comment currencyFormatter function for Judge*/ 

function result(formater){ 
    return function(value) {
       return formater(',', '$', true, value);
    }
}

let dollarFormater = result(currencyFormatter);
console.log(dollarFormater(100));
