function solve() {

  let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswersCount = 0;
  let sections = document.getElementsByTagName('section');

  for(let i = 0;i < sections.length; i++){
    let answers = sections[i].querySelectorAll('div.answer-wrap');
    if(i != sections.length - 1){

      for(let j = 0; j < answers.length; j++){
        answers[j].addEventListener('click', 
          () => {
            let answerText = answers[j].querySelector('p').innerHTML;
            if(answerText === rightAnswers[i]){
              rightAnswersCount++;
            }

            for(let i = 0;i < sections.length; i++){
              if(!sections[i].classList.contains('hidden')){
                sections[i + 1].classList.remove('hidden');
                sections[i].classList.add('hidden');
                sections[i].style.display = 'none';
                sections[i + 1].style.display = 'block';
                break;
              }
            }

        });

      }

    }else{
      for(let j = 0; j < answers.length; j++){
        answers[j].addEventListener('click', 
          () => {
            let answerText = answers[j].querySelector('p').innerHTML;
            if(answerText === rightAnswers[i]){
              rightAnswersCount++;
            }
            
            sections[sections.length - 1].classList.add('hidden');
            sections[i].style.display = 'none';
            let resultDiv = document.querySelector('#results');
            resultDiv.style.display = 'block';
            let result = resultDiv.querySelector('h1');

            if(rightAnswersCount == rightAnswers.length){
              result.innerHTML = 'You are recognized as top JavaScript fan!'; 
            }else{
              result.innerHTML = `You have ${rightAnswersCount} right answers`;
            }

        });
      }
    }
    
  }
}
