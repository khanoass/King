// Loading components
let model = new GameModel();
let view = new GameView();
let controller = new GameController(model, view);

// End loading text
document.getElementById('preload').style.display = "none";