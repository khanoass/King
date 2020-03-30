class FaceDownCard {

    constructor(id) {
        this.id = id;

        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.deg = 0;
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

    // Returns card HTML source
    src() {
        return '<div class="facedowncard '+ this.id +'"></div>';
    }
}