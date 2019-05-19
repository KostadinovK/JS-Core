function solve() {
  let divs = document.getElementsByClassName('link-1');
  for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', 
    () => {
      let words = divs[i].querySelector('p').innerHTML.split(' ');
      let numberOfVisits = Number(words[1]);
      divs[i].querySelector('p').innerHTML = `${words[0]} ${++numberOfVisits} ${words[2]}`;
    });
  }
}