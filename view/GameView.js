class GameView {

    constructor() {
    }

    // Adds source to the page
    displaySrc(html) {
        document.getElementById('main').innerHTML += html;
    }

    // Sets the position of a card
    updateCardPosition(card) {

        let realcard = document.getElementsByClassName(card.letter + ' ' + card.color)[0];    
        let x = card.position.x;
        let y = card.position.y;

        realcard.style.transform += 'translate('+ x + 'px,' + y + 'px' +')';
    }

    // Sets the rotation of a card
    updateCardRotation(card) {

        let realcard = document.getElementsByClassName(card.letter + ' ' + card.color)[0];    
        let deg = card.rotationDeg;

        realcard.style.transform += 'rotate('+ deg +'deg)';
    }
}