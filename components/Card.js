class Card {

    constructor(rank, letter, color) {
        this.rank = rank;
        this.letter = letter;
        this.color = color;
    }

    // Sets absolute position amount
    setPosition(x, y) {
        this.x = x;
        this.y = y
    }

    // Sets rotation amount
    setRotation(deg) {
        this.deg = deg;
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