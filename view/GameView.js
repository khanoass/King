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

    // Updates a card
    updateCard(card) {

        let realcard = this.getCardFromSrc(card);
        let x = card.x;
        let y = card.y;
        let deg = card.deg;

        realcard.style.transform = 'translate('+ x + 'px,' + y + 'px' +')';
        realcard.style.transform += 'rotate('+ deg +'deg)';
    }
}