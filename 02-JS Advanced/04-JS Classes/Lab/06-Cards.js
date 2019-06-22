(function(){
    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    }

    class Card{
        
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face;
        }

        set face(f){
            if(!validFaces.includes(f)){
                throw new Error('Invalid card face');
            }
            this._face = f;
        }

        get suit(){
            return this._suit;
        }

        set suit(s){
            if(!Object.values(Suits).includes(s)){
                throw new Error('Invalid card suit');
            }
            this._suit = s;
        }
    };

    return {
        Card, Suits
    };
})();