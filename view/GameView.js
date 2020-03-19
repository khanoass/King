class GameView {

    constructor() {
    }

    // Sets an event listener
    setListener(listener) {
        this.listener = listener;
        let view = this;

        // Move
        window.addEventListener('mousemove', function(event) {
            view.listener.onMouseMoved(event);
        });

        // Release
        window.addEventListener('mouseup', function() {
            view.listener.onMouseReleased();
        });
    }

    // Adds source to the page
    displaySrc(html) {
        document.getElementById('main').insertAdjacentHTML('beforeEnd', html);
    }

      ////////////////////////////
     /// GETTING ELEMENTS
    ////////////////////////////

    // Gets a card from src
    getCardFromSrc(card) {
        return document.getElementsByClassName('card ' + card.letter + ' ' + card.color)[0];
    }

    // Gets a card from src
    getMagnetFromSrc(magnet) {
        return document.getElementsByClassName('magnet ' + magnet.id)[0];
    }

      ////////////////////////////
     /// DISPLAYING ELEMENTS
    ////////////////////////////

    // Add a card to the page, with event handlers and whatnot
    displayCard(card) {

        let view = this;
        this.displaySrc(card.src());
        let realcard = this.getCardFromSrc(card);

        // Hold
        realcard.addEventListener('mousedown', function(event) {
            view.listener.onCardHeld(card, event);
        });
    }

    displayMagnet(magnet) {

        let view = this;
        this.displaySrc(magnet.src());
    }

      ////////////////////////////
     /// UPDATING ELEMENTS
    ////////////////////////////

    // Updates an actual card based on its js object
    updateCard(card) {

        let realcard = this.getCardFromSrc(card);

        realcard.style.width = card.width + 'px';
        realcard.style.height = card.height + 'px';
        realcard.style.transform = 'translate('+ card.x + 'px,' + card.y + 'px' +') rotate('+ card.deg +'deg)';
    }

    updateMagnet(magnet) {

        let realmagnet = this.getMagnetFromSrc(magnet);

        realmagnet.style.width = magnet.width + 'px';
        realmagnet.style.height = magnet.height + 'px';
        realmagnet.style.transform = 'translate('+ magnet.x + 'px,' + magnet.y + 'px' +') rotate('+ magnet.deg +'deg)';

        // Glow
        if(magnet.glow)
            realmagnet.style.border = '1px solid black';
        else
            realmagnet.style.border = 'none';
    }
}