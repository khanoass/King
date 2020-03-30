class Deck {

    constructor() {

        // Create each card
        this.cardsNb = LETTERS.length * COLORS.length;
        this.cards = new Array(this.cardsNb);
        var c = 0;  
        for(var i = 0; i < COLORS.length; i++) {
            for(var j = 0; j < LETTERS.length; j++) {

                // Init at pos (0; 0) and with 0° rotation
                let card = new Card(j, LETTERS[j], COLORS[i]);
                card.setPosition(0, 0);
                card.setRotation(0);

                this.cards[c] = card;
                c++;
            }
        }
    }

    // Returns a random card object in the deck
    randomCardObject() {
        return this.cards[Math.floor(Math.random() * this.cardsNb)];
    }

    // Returns a card's source (HTML) by its letter and color
    // Returns '' if not found
    cardSrc(letter, color) {
        for(var i = 0; i < this.cards.length; i++) {
            if(this.cards[i].letter == letter && this.cards[i].color == color) {
                return this.cards[i].src();
            }
        }
        return '';
    }

    // Returns a card by its letter and color
    // Returns undefined if not found
    cardObject(letter, color) {
        for(var i = 0; i < this.cards.length; i++) {
            if(this.cards[i].letter == letter && this.cards[i].color == color) {
                return this.cards[i];
            }
        }
        return undefined;
    }
}