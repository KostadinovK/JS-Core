/**
 * 
 * @param {String} str 
 */
function convert(str){
    let words = str
        .toLocaleUpperCase()
        .split(/[,. ?!;_'"-]/)
        .filter(w => w.length > 0)
        .join(', ');

    console.log(words);
}

convert('Hi, ""how are you?');
convert('hello');