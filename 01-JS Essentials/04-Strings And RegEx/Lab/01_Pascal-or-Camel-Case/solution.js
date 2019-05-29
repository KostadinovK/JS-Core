function solve(){
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value; 
  let result = document.getElementById('result');


  if(convention === 'Camel Case' || convention === 'Pascal Case'){
    result.textContent = text.split(' ').filter(str => str !== '').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join('');
  }else{
    result.textContent = 'Error!';
  }

  if(convention === 'Camel Case'){
    result.textContent = result.textContent[0].toLowerCase() + result.textContent.substring(1);
  }
}