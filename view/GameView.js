class GameView {

    constructor() {
    }

    // Sets an event listener
    setListener(listener) {
        this.listener = listener;
    }

    // Gets a card from src
    getCardFromSrc(card) {
        return document.getElementsByClassName(card.letter + ' ' + card.color)[0];
    }

    // Adds source to the page
    displaySrc(html) {
        document.getElementById('main').insertAdjacentHTML('beforeEnd', html);
    }

    // Displays the hand of a player to the page
    displayHand(x, y, width, height, spacing, player) {

        for(var i = 0; i < player.cards.length; i++) {

            let card = player.cards[i];
            card.setSize(width, height);
            card.setPosition(x + (width + spacing) * i, y);

            this.displayCard(card);
            this.updateCard(card);
        }
    }

    // Add a card to the page, with event handlers and whatnot
    displayCard(card) {

        let view = this;
        this.displaySrc(card.src());
        let realcard = this.getCardFromSrc(card);

        // Hold
        realcard.addEventListener('mousedown', function(event) {
            view.listener.onCardHeld(card, event);
        });

        // Move
        window.addEventListener('mousemove', function(event) {
            view.listener.onMouseMoved(event);
        });

        // Release
        window.addEventListener('mouseup', function() {
            view.listener.onMouseReleased();
        });
    }

    // Updates an actual card based on its js object
    updateCard(card) {

        let realcard = this.getCardFromSrc(card);

        realcard.style.width = card.width + 'px';
        realcard.style.height = card.height + 'px';
        realcard.style.transform = 'translate('+ card.x + 'px,' + card.y + 'px' +') rotate('+ card.deg +'deg)';
    }
}