class Card {

    constructor(rank, letter, color) {
        this.rank = rank;
        this.letter = letter;
        this.color = color;

        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.deg = 0;

        this.boundX = 0;
        this.boundY = 0;
    }

    // Set absolute start position
    setBoundPosition(x, y) {
        this.boundX = x;
        this.boundY = y;
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

    // Sets the magnet
    setMagnet(magnet) {
        this.magnet = magnet;
    }

    // Returns card HTML source
    src() {
        return ''+
        '<div class="card '+ this.letter + ' ' + this.color +'">'+
            '<div class="letter">'+ this.letter +'</div>'+
            '<div class="color"><img src="'+ TEXTURE_PATH + this.color + TEXTURE_EXT +'" alt="color"></div>'+
        '</div>';
    }
}