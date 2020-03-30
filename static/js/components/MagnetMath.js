// Displays a set of magnets
function displayMagnets(magnets, view) {

    for(var i = 0; i < magnets.length; i++) {

        view.displayMagnet(magnets[i]);
        view.updateMagnet(magnets[i]);
    }
}

// Unglows a set of magnets
function unglowMagnets(magnets, view) {

    magnets.forEach(magnet => {
        if(magnet.glow) {
            magnet.glow = false;
            view.updateMagnet(magnet);
        }
    });
}