function solve(){
    let text = document.getElementById('input').innerHTML;
    let sentences = text.split(".").map(s => s.trim());

    let outputElement = document.getElementById('output');

    let pCount = parseInt(sentences.length / 3);
    if(sentences.length % 3 != 0){
      pCount++;
    }
      
    let index = 0;
    for(let i = 0; i < pCount; i++){
      var p = document.createElement('p');
      for(let j = index; j < index + 3; j++){
        p.innerHTML += sentences[j];
      }
      index += 3;
      outputElement.appendChild(p);
    }
}