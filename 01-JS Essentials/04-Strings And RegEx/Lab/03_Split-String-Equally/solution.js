function solve() {
    let text = document.getElementById('text').value;
    let number = Number(document.getElementById('number').value);
    let result = document.getElementById('result');

    if(text.length % number != 0){
        text += text.substr(0, number - text.length % number);
    }

    let splittedParts = [];

    for(let i = 0;i <= text.length - number; i+=number){
        splittedParts.push(text.substr(i, number));
    }

    result.textContent = splittedParts.join(' ');
}