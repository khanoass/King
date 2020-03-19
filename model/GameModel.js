class GameModel {

    constructor() {

        // The deck
        this.deck = new Deck();
        this.cardsDealt = new Array(52);

        // The players
        this.playerNb = 4;
        this.players = new Array(this.playerNb);

        // Dealing 13 random cards to each player
        this.cardsNbPerPlayer = 13;

        for(var i = 0; i < this.playerNb; i++) {
            let p = new Player();
            p.setCards(this.dealRandomCardsFromDeck(this.cardsNbPerPlayer));
            this.players[i] = p;
        }
    }

    // Returns random cards that have not yet been dealt
    dealRandomCardsFromDeck(nb) {

        let out = new Array(nb);
        let temp = new Card();

        for(var i = 0; i < nb; i++) {
            do {
                temp = this.deck.randomCardObject();
            } while(this.cardsDealt.includes(temp));

            // Add the card to the cards dealt and to the output array
            this.cardsDealt.push(temp);
            out[i] = temp;
        }

        return out;
    }
}