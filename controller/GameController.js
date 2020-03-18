class GameController {

    constructor(model, view) {

        // Init the elements
        this.model = model;
        this.view = view;

        // Display a card test
        let kingspadesSrc = this.model.cardSrc('K', 'spades');
        let kingspades = this.model.cardObject('K', 'spades');

        kingspades.setPosition(new Vector2(300, 200));
        kingspades.setRotation(30);

        this.view.displaySrc(kingspadesSrc);
        this.view.updateCardPosition(kingspades);
        this.view.updateCardRotation(kingspades);
    }
}