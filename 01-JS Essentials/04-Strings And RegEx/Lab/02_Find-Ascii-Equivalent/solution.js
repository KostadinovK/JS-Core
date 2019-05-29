function solve() {
  let input = document.getElementById('text');
  let result = document.getElementById('result');

  let text = input.value.split(' ').filter(w => w !== '');

  text.filter(x => !Number(x)).forEach(word => {
    let p = document.createElement('p');
    result.appendChild(p);

    let nums = [];
    for (const char of word) {
      nums.push(char.charCodeAt());
    }

    p.textContent += nums.join(' ');
  });

  let p = document.createElement('p');
  result.appendChild(p);

  let word = text.filter(x => Number(x)).reduce((word, currentNum) => word.concat(String.fromCharCode(currentNum)), '');

  p.textContent += word; 
}