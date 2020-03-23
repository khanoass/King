// Returns true if rect1 and rect2 are colliding, false otherwise
function areColliding(rect1, rect2) {

    return (rect1.x < rect2.x + rect2.width     &&
            rect1.x + rect1.width > rect2.x     &&
            rect1.y < rect2.y + rect2.height    &&
            rect1.y + rect1.height > rect2.y    );
}

// Returns a magnet if a given card is colliding with a magnet in a set of magnets, undefined otherwise
function isCardOnMagnet(card, magnets) {

    for(var i = 0; i < magnets.length; i++) {

        let m = magnets[i];
        if(areColliding(new Rect(card.x, card.y, card.width, card.height), new Rect(m.x, m.y, m.width, m.height))) {
            return m;
        }
    }

    return undefined;
}

// Swaps 2 cards' position and magnets
function swapCards(card1, card2) {

    magnet1 = card1.magnet;
    magnet2 = card2.magnet;

    // Pos
    card2.setPosition(magnet1.x, magnet1.y);
    card1.setPosition(magnet2.x, magnet2.y);

    // Rot
    card2.setRotation(magnet1.deg);
    card1.setRotation(magnet2.deg);

    // Magnet of cards
    card2.magnet.clearCards();
    card2.setMagnet(magnet1);
    card1.magnet.clearCards();
    card1.setMagnet(magnet2);

    // Cards of magnets
    magnet1.addCard(card2);
    magnet2.addCard(card1);
}

function setCardOnMagnet(card, magnet) {

    // Pos
    card.setPosition(magnet.x, magnet.y);

    // Rot
    card.setRotation(magnet.deg);

    // Magnet of card
    card.magnet.clearCards();
    card.setMagnet(magnet);

    // Card of magnet
    magnet.addCard(this.cardDragged);
}