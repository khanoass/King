class GameController {

    constructor(model, view) {

        // Init the elements
        this.model = model;
        this.view = view;
        this.view.setListener(this);

        this.cardHeldRotation = 15;

        this.displayMagnets(this.model.magnets);
        this.displayHand(400, 700, 80, 120, 10, this.model.players[0]);
    }

    // Displays the hand of a player to the page
    displayHand(x, y, width, height, spacing, player) {

        for(var i = 0; i < player.cards.length; i++) {
            
            let magnet = new Magnet(i, 'swapping');
            magnet.setSize(width, height);
            magnet.setPosition(x + (width + spacing) * i, y);
            this.model.magnets.push(magnet);

            this.view.displayMagnet(magnet);
            this.view.updateMagnet(magnet);
        }

        for(var i = 0; i < player.cards.length; i++) {

            let card = player.cards[i];
            card.setSize(width, height);
            card.setPosition(x + (width + spacing) * i, y);
            card.setBoundPosition(card.x, card.y);

            this.view.displayCard(card);
            this.view.updateCard(card);
        }
    }

    // Displays a set of magnets
    displayMagnets(magnets) {

        for(var i = 0; i < magnets.length; i++) {

            this.view.displayMagnet(magnets[i]);
            this.view.updateMagnet(magnets[i]);
        }
    }

    // Returns a magnet if a given card is colliding with a magnet in a set of magnets, undefined otherwise
    isCardOnMagnet(card, magnets) {

        for(var i = 0; i < magnets.length; i++) {

            let m = magnets[i];
            if(this.areColliding(new Rect(card.x, card.y, card.width, card.height), new Rect(m.x, m.y, m.width, m.height))) {
                return m;
            }
        }

        return undefined;
    }

    // Returns true if rect1 and rect2 are colliding, false otherwise
    areColliding(rect1, rect2) {

        return (rect1.x < rect2.x + rect2.width     &&
                rect1.x + rect1.width > rect2.x     &&
                rect1.y < rect2.y + rect2.height    &&
                rect1.y + rect1.height > rect2.y    );
    }

      ////////////////////////////
     /// EVENTS
    ////////////////////////////

    // When a card is clicked on
    onCardHeld(card, event) {

        // If the card isn't on a locking magnet
        if(card.magnet == undefined || card.magnet.type != 'locking') {

            // Calculate position values
            this.diffX = event.clientX - card.x;
            this.diffY = event.clientY - card.y;

            // The card is being dragged
            this.draggingCard = true;
            this.cardDragged = card;

            // Update the card's style and priority
            this.cardRotation = this.cardDragged.deg;
            this.cardDragged.setRotation(this.cardHeldRotation + this.cardRotation);
            this.view.updateCard(this.cardDragged);
        }
    }

    // When the mouse is moved
    onMouseMoved(event) {
        if(this.draggingCard) {

            // Update the card's position position
            this.cardDragged.setPosition(event.clientX - this.diffX, event.clientY - this.diffY);
            this.view.updateCard(this.cardDragged);

            // Unglow all magnets
            this.model.magnets.forEach(magnet => {
                if(magnet.glow) {
                    magnet.glow = false;
                    this.view.updateMagnet(magnet);
                }
            });

            // If the card is on a magnet
            let magnet = this.isCardOnMagnet(this.cardDragged, this.model.magnets);
            if(magnet != undefined) {
            
                // Make the magnet glow
                magnet.glow = true;
                this.view.updateMagnet(magnet);
            }
        }
    }

    // When a card is released
    onMouseReleased() {
        if(this.draggingCard) {

            // If the card is on a magnet
            let magnet = this.isCardOnMagnet(this.cardDragged, this.model.magnets);
            if(magnet != undefined) {

                switch(magnet.type) {
                    case 'swapping':

                        // Set the card on top of the magnet and swap the other card if any
                        this.cardDragged.setRotation(magnet.deg);
                        this.cardDragged.setPosition(magnet.x, magnet.y);
                        this.cardDragged.setBoundPosition(magnet.x, magnet.y);
                        this.cardDragged.setMagnet(magnet);

                        if(magnet.cards.length > 0) {
                            
                            let magnetA = this.cardDragged.magnet;
                            let cardB = magnet.cards[0];

                            magnetA.clearCards();
                            magnetA.addCard(cardB);

                            magnet.clearCards();
                            magnet.addCard(this.cardDragged);
                        }
                        else {
                            magnet.addCard(this.cardDragged);
                        }

                        break;
                    case 'locking':

                        // Set the card on top of the magnet
                        this.cardDragged.setRotation(magnet.deg);
                        this.cardDragged.setPosition(magnet.x, magnet.y);
                        this.cardDragged.setBoundPosition(magnet.x, magnet.y);
                        this.cardDragged.setMagnet(magnet);
                        magnet.addCard(this.cardDragged);

                        break;
                    default:
                        break;
                }
            }
            else {
                // Reset the card's rotation and position
                this.cardDragged.setRotation(this.cardRotation);
                this.cardDragged.setPosition(this.cardDragged.boundX, this.cardDragged.boundY);
            }

            this.view.updateCard(this.cardDragged);

            // The card is not being dragged anymore
            this.draggingCard = false;
            this.cardDragged = undefined;
            this.cardRotation = undefined;
        }
    }
}