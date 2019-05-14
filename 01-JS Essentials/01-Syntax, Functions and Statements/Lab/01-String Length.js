/**
 * 
 * @param {String} str1 
 * @param {String} str2 
 * @param {String} str3 
 */
function strings(str1, str2, str3){
    let length = str1.length + str2.length + str3.length;
    console.log(length);
    console.log(parseInt(length / 3)); 
}

strings("chocolate", "ice cream", "cake");