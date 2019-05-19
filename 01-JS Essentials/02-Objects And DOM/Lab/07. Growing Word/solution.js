function growingWord() {
    let text = document.querySelector('#exercise p');
    let colorDivs = document.querySelectorAll('#colors div');

    let newSize = Number(text.style.fontSize.slice(0, -2)) * 2 || 2;
    if(newSize == 2){
      colorDivs[0].classList.add('active');
    }else{
      for(let i = 0; i < colorDivs.length; i++){
        if(colorDivs[i].classList.contains('active')){
          colorDivs[i].classList.remove('active');
          if(i == colorDivs.length - 1){
            colorDivs[0].classList.add('active');
          }else{
            colorDivs[i + 1].classList.add('active');
          }
          break;
        }
      }
    }

    let color = document.getElementsByClassName('active')[0].id.slice(0, -3);
    
    text.style.color = color;
    text.style.fontSize = `${newSize}px`;
}