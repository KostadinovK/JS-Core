function solve() {

    let word = document.getElementById('word').value;
    let text = document.getElementById('text').value;
    let resultElement = document.getElementById('result');

    text = text.substring(1, text.length - 2).split(',').filter(str => str !== '').map(str => str.trim()).map(str => str.replace(/["]/g, ""));
    let wordToReplace = text[0].split(' ')[2];

    text = text.map(sen => sen.replace(new RegExp(wordToReplace, 'gi'), word));

    text.forEach(sen => {
        let p = document.createElement('p');
        resultElement.appendChild(p);
        p.textContent = sen;
    });
}