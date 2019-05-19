function solve() {
   let cards = document.getElementsByTagName('img');
   

   for(let i = 0; i < cards.length; i++){
      cards[i].addEventListener('click', selectCard);
   }

   function selectCard(event){
      let card = event.target;
      let playerOneValue = document.querySelector('#result span');
      let playerTwoValue = document.querySelector('#result span:last-child');
      let cardValue = Number(card.name);

      if(card.parentNode === document.getElementById('player1Div') && playerOneValue.innerHTML === ''){

         playerOneValue.innerHTML = cardValue;
         card.src = card.src.replace('card', 'whiteCard');

      }else if(card.parentNode === document.getElementById('player2Div') && playerTwoValue.innerHTML === ''){

         playerTwoValue.innerHTML = cardValue;
         card.src = card.src.replace('card', 'whiteCard');
      }

      if(playerOneValue.innerHTML != '' && playerTwoValue.innerHTML != ''){
         let firstCard = document.querySelector(`#player1Div img[name="${playerOneValue.innerHTML}"]`);
         let secondCard = document.querySelector(`#player2Div img[name="${playerTwoValue.innerHTML}"]`);
        
         if(Number(playerOneValue.innerHTML) > Number(playerTwoValue.innerHTML)){
            firstCard.style.border = '2px solid green';
            secondCard.style.border = '2px solid red';
         }else{
            firstCard.style.border = '2px solid red';
            secondCard.style.border = '2px solid green';
         }

         document.getElementById('history').innerHTML += `[${playerOneValue.innerHTML} vs ${playerTwoValue.innerHTML}] `;
         playerOneValue.innerHTML = '';
         playerTwoValue.innerHTML = '';
      }
   }
}