class DecoHand {

    constructor(cardsNb, view, id) {

        this.id = id;
        this.view = view;
        this.cardsNb = cardsNb;
    }

    displayHand(x, y, width, height, spacing, direction) {

        for(var i = 0; i < this.cardsNb; i++) {
        
            // Cards
            let card = new FaceDownCard(''+this.id+''+i);
            card.setSize(width, height);

            switch(direction) {
                case Direction.HORIZONTAL:

                    card.setPosition(x + (width + spacing) * i, y);
                    card.setRotation(0);
                    break;
                case Direction.VERTICAL:

                    card.setPosition(x, y + (width + spacing) * i);
                    card.setRotation(90);
                    break;
            }

            this.view.displayFaceDownCard(card);
        }
    }
}