/**
 * 
 * @param {Array} arr 
 */

function countWords(arr){
    let text = arr[0].split(/[,. ?!;'"-]/).filter(w => w.length > 0);
    let words = {}

    for (const word of text) {
        if(!words[word]){
            words[word] = 0;
        }

        words[word]++;
    }

    console.log(JSON.stringify(words));
}

countWords(["Far too slow, you're far too slow."]);
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);