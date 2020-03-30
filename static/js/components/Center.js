class Center {

    constructor(x, y, twidth, theight, width, height) {

        // The "center" magnets
        this.magnets = new Array(4);

        this.magnets[0] = new Magnet(0.1, MagnetType.NONEXISTENT);
        this.magnets[0].setPosition(x, y + theight / 2 - width / 2);
        this.magnets[0].setSize(width, height);
        this.magnets[0].setRotation(90);

        this.magnets[1] = new Magnet(0.2, MagnetType.NONEXISTENT);
        this.magnets[1].setPosition(x + twidth / 2 - width / 2, y);
        this.magnets[1].setSize(width, height);
        this.magnets[1].setRotation(180);

        this.magnets[2] = new Magnet(0.3, MagnetType.NONEXISTENT);
        this.magnets[2].setPosition(x + twidth - width, y + theight / 2 - width / 2);
        this.magnets[2].setSize(width, height);
        this.magnets[2].setRotation(270);

        this.magnets[3] = new Magnet(0.4, MagnetType.LOCKING);
        this.magnets[3].setPosition(x + twidth / 2 - width / 2, y + theight - width);
        this.magnets[3].setSize(width, height);
        this.magnets[3].setRotation(0);

        this.main = this.magnets[3];
    }
}