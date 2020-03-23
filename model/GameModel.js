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

        // The "center" magnets
        this.magnets = new Array(4);

        this.magnets[0] = new Magnet(0.1, MagnetType.LOCKING);
        this.magnets[0].setPosition(780, 300);
        this.magnets[0].setSize(80, 120);
        this.magnets[0].setRotation(90);

        this.magnets[1] = new Magnet(0.2, MagnetType.LOCKING);
        this.magnets[1].setPosition(900, 180);
        this.magnets[1].setSize(80, 120);
        this.magnets[1].setRotation(180);

        this.magnets[2] = new Magnet(0.3, MagnetType.LOCKING);
        this.magnets[2].setPosition(1020, 300);
        this.magnets[2].setSize(80, 120);
        this.magnets[2].setRotation(270);

        this.magnets[3] = new Magnet(0.4, MagnetType.LOCKING);
        this.magnets[3].setPosition(900, 420);
        this.magnets[3].setSize(80, 120);
        this.magnets[3].setRotation(0);
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