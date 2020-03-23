class GameController {

    constructor(model, view) {

        // Init the elements
        this.model = model;
        this.view = view;
        this.view.setListener(this);

        this.cardHeldRotation = 15;

        // Center magnets
        displayMagnets(this.model.magnets, this.view);

        // Hand
        this.hand = new HandManager(this.model.players[0].cards, this.view);
        this.hand.displayHand(400, 700, 80, 120, 10);
    }

      ////////////////////////////
     /// EVENTS
    ////////////////////////////

    // When a card is clicked on
    onCardHeld(card, event) {
        if(card.magnet.type != MagnetType.LOCKING) {

            // Calculate position values
            this.diffX = event.clientX - card.x;
            this.diffY = event.clientY - card.y;

            // The card is being dragged
            this.draggingCard = true;
            this.cardDragged = card;

            // Update the card's style and priority
            this.cardRotation = this.cardDragged.deg;
            this.cardDragged.setRotation(this.cardHeldRotation + this.cardRotation);
            
            // Display card in held div
            this.view.removeCard(this.cardDragged);
            //this.view.heldToCards(this.cardDragged);
            this.view.displayCardInHeld(this.cardDragged);
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
            let magnets = this.model.magnets.concat(this.hand.magnets);
            unglowMagnets(magnets, this.view);

            // If the card is on a magnet
            let magnet = isCardOnMagnet(this.cardDragged, magnets);
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
            let magnets = this.model.magnets.concat(this.hand.magnets);
            let magnet = isCardOnMagnet(this.cardDragged, magnets);
            if(magnet != undefined) {

                switch(magnet.type) {
                    case MagnetType.SWAPPING:

                        // If the magnet is the base one
                        if(magnet == this.cardDragged.magnet) {

                            // Reset the card
                            this.cardDragged.reset();
                            this.view.updateCard(this.cardDragged);
                        }

                        // If the magnet is empty
                        else if(magnet.cards.length == 0) {

                            // Set the card on top of the magnet
                            setCardOnMagnet(this.cardDragged, magnet);
                            this.view.updateCard(this.cardDragged);
                        }

                        // If the magnet has 1 card
                        else if(magnet.cards.length == 1) {

                            // Swap the cards
                            let card2 = magnet.cards[0];
                            swapCards(this.cardDragged, card2);

                            this.view.updateCard(this.cardDragged);
                            this.view.updateCard(card2);
                        }

                        // If the magnet has more than 1 card
                        else {

                            // Not supposed to happen
                            console.log("Error: more than 1 card on swapping magnet");
                        }

                        // held -> cards
                        this.view.heldToCards(this.cardDragged);

                        break;
                    case MagnetType.LOCKING:

                        // Set the card on top of the magnet
                        setCardOnMagnet(this.cardDragged, magnet);
                        this.view.updateCard(this.cardDragged);

                        // held -> center
                        this.view.heldToCenter(this.cardDragged);

                        break;
                    default:
                        break;
                }
            }
            else {
                // Reset the card if it is not on a magnet
                this.cardDragged.reset();

                this.view.updateCard(this.cardDragged);

                // held -> cards
                this.view.heldToCards(this.cardDragged);
            }

            // Unglow all magnets
            unglowMagnets(magnets, this.view);

            // The card is not being dragged anymore
            this.draggingCard = false;
            this.cardDragged = undefined;
            this.cardRotation = undefined;
        }
    }
}