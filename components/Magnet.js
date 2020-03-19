class Magnet {

    constructor(id, type) {
        this.id = id;
        this.type = type;

        this.x = 0;
        this.y = 0;
        this.deg = 0;
        this.width = 0;
        this.height = 0;
        this.glow = false;
    
        this.cards = new Array();
    }

    // Sets absolute position amount
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    // Sets absolute size amount
    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    // Sets rotation amount
    setRotation(deg) {
        this.deg = deg;
    }

    addCard(card) {
        this.cards.push(card);
    }

    clearCards() {
        this.cards = [];
    }

    // Returns card magnet HTML source
    src() {
        return '<div class="magnet '+ this.id +'"></div>';
    }
}