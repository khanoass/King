class GameModel {

    constructor() {
        this.deck = new Deck();
    }

    cardSrc(letter, color) {
        let src = this.deck.cardSrc(letter, color);
        return ((src == '') ? 'Couldn\'t find card in deck' : src);
    }

    cardObject(letter, color) {
        return this.deck.cardObject(letter, color);
    }
}