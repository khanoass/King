class Hand {

    constructor(cards, view, main) {

        this.view = view;
        this.cards = cards;
        this.main = main;
        this.magnets = new Array();

        for(var i = 0; i < this.cards.length; i++) {

            // Magnets
            let magnet = new Magnet(i, MagnetType.SWAPPING);
            this.magnets.push(magnet);
        }
    }

    displayHand(x, y, width, height, spacing) {

        for(var i = 0; i < this.cards.length; i++) {
        
            // Magnets
            let magnet = this.magnets[i];
            magnet.setSize(width, height);
            magnet.setPosition(x + (width + spacing) * i, y);
            magnet.addCard(this.cards[i]);

            this.view.displayMagnet(magnet);
            this.view.updateMagnet(magnet);

            // Cards
            let card = this.cards[i];
            card.setSize(width, height);
            card.setPosition(x + (width + spacing) * i, y);
            card.setMagnet(this.magnets[i]);
            card.setMainMagnet(this.main);

            this.view.displayCard(card);
            this.view.updateCard(card);
        }
    }
}