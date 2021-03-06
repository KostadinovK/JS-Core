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
        throw new Error('Invalid suit or face');
    }

    return {
        face, 
        suit,
        toString: () => `${face}${unicodesToSuits[suit]}` 
    };
}

let card = createCard('1', 'S');
console.log(card.toString());