class GameModel {

    constructor() {

        // The deck
        this.deck = new Deck();
        this.cardsDealt = new Array(52);

        // Getting the 13 dealt cards for this player in the backend
        this.cardsNbPerPlayer = 13;
        this.player = new Player();

        //this.player.setCards(this.getDealtCards()); TODO /!\
        this.player.setCards(this.dealRandomCardsFromDeck(this.cardsNbPerPlayer)); // Client-side dealing, temporary

        this.center = new Center(800, 200, 300, 300, 80, 120);
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

    // Returns the cards fetched from Dealer.php (ajax)
    getDealtCards() {

    }
}