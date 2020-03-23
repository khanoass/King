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
    displaySrc(html, div, mode) {
        document.getElementById(div).insertAdjacentHTML(mode, html);
    }

    // Adds source to the top of the page
    displaySrcTop(html, div) {
        this.displaySrc(html, div, 'beforeEnd');
    }

    // Adds DOM HTML to th etop of the page
    displayHTMLTop(object, div) {
        document.getElementById(div).appendChild(object);
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
        this.displaySrcTop(card.src(), 'cards');

        // Hold
        let realcard = this.getCardFromSrc(card);
        realcard.addEventListener('mousedown', function(event) {
            view.listener.onCardHeld(card, event);
        });
    }

    // Adds a magnet to the page
    displayMagnet(magnet) {

        this.displaySrcTop(magnet.src(), 'magnets');
    }

    // Displays a card in the center
    displayCardInCenter(card) {

        this.displaySrcTop(card.src(), 'center');
    }

    // Displays a card in the held
    displayCardInHeld(card) {

        this.displaySrcTop(card.src(), 'held');
    }

    // Removes a card from the page
    removeCard(card) {

        this.getCardFromSrc(card).outerHTML = '';
    }

    // Sets the card in held in a div
    heldToDiv(div, realcard) {

        let held = document.getElementById('held');
        let card = held.firstChild;
        
        if(card != undefined) {
            held.innerHTML = '';
            this.displayHTMLTop(card, div);

            // Hold
            let objectcard = realcard;
            card.addEventListener('mousedown', function(event) {
                view.listener.onCardHeld(objectcard, event);
            });
        }
    }

    // Sets the card in 'held' in 'cards'
    heldToCards(held) {

        this.heldToDiv('cards', held);
    }

    // Sets the card in 'held' in 'center'
    heldToCenter(held) {

        this.heldToDiv('center', held);
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

    // Updates a magnet based on its object
    updateMagnet(magnet) {

        let realmagnet = this.getMagnetFromSrc(magnet);

        realmagnet.style.width = magnet.width + 'px';
        realmagnet.style.height = magnet.height + 'px';
        realmagnet.style.transform = 'translate('+ magnet.x + 'px,' + magnet.y + 'px' +') rotate('+ magnet.deg +'deg)';

        // Glow
        if(magnet.glow)
            realmagnet.style.boxShadow = '0 0 3px 3px gray';
        else
            realmagnet.style.boxShadow = 'none';
    }
}