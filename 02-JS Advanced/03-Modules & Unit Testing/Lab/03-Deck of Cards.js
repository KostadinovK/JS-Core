function printDeck(cards){
    let deck = [];
    for (const cardStr of cards) {
        let [face, suit] = cardStr.split('');
        if(cardStr.split('').length === 3){
            face += suit;
            suit = cardStr.split('')[2];
        }

        try{
            let card = createCard(face, suit);
            deck.push(card.toString());
        }catch(ex){
            console.log(ex.message);
            return;
        }
    }

    console.log(deck.join(' '));

    function createCard(face, suit){
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];
        let unicodesToSuits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };
    
        if(!faces.includes(face) || !suits.includes(suit)){
            throw new Error(`Invalid card: ${face}${suit}`);
        }
    
        return {
            face, 
            suit,
            toString: () => `${face}${unicodesToSuits[suit]}` 
        };
    }
}

printDeck(['AS', '10D', 'KH', '2C']);