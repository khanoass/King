class GameController {

    constructor(model, view) {

        // Init the elements
        this.model = model;
        this.view = view;
        this.view.setListener(this);

        // Display cards
        let cards = this.model.deck.cards;

        for(var i = 0; i < cards.length; i++) {
            cards[i].setPosition(10 * i + 100, 200);
            this.view.displayCard(cards[i]);
            this.view.updateCard(cards[i]);
        }
    }

    // When a card is clicked on
    onCardHeld(card, event) {

        // Calculate position values
        this.diffX = event.clientX - card.x;
        this.diffY = event.clientY - card.y;

        // The card is being dragged
        this.draggingCard = true;
        this.cardDragged = card;

        // Update the card's style and priority
        this.cardRotation = this.cardDragged.deg;
        this.cardDragged.setRotation(15 + this.cardRotation);
        this.view.updateCard(this.cardDragged);
    }

    // When the mouse is moved
    onMouseMoved(event) {
        if(this.draggingCard) {

            // Update its position
            this.cardDragged.setPosition(event.clientX - this.diffX, event.clientY - this.diffY);
            this.view.updateCard(this.cardDragged);
        }
    }

    // When a card is released
    onMouseReleased() {
        if(this.draggingCard) {

            // Reset its rotation
            this.cardDragged.setRotation(this.cardRotation);
            this.view.updateCard(this.cardDragged);

            // The card is not being dragged anymore
            this.draggingCard = false;
            this.cardDragged = undefined;
            this.cardRotation = undefined;
        }
    }
}