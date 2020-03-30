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
        this.baseRotation = 0;
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

    // Sets base rotation
    setBaseRotation(deg) {
        this.baseRotation = deg;
    }

    // Sets the main magnet
    setMainMagnet(main) {
        this.main = main;
    }

    reset() {
        this.x = this.magnet.x;
        this.y = this.magnet.y;
        this.deg = this.baseRotation;
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
            '<div class="color"><img src="'+ FRONTEND_RESOURCES_PATH + 'textures/' + this.color + TEXTURE_EXT +'" alt="color"></div>'+
        '</div>';
    }
}