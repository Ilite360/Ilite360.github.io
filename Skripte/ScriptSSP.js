function spielerZug() {
    const prediction = await model.predict(webcam.canvas, true);
    var maxProbability = 0;
    for (var i = 0; i < 3; i++) {
        if (prediction[i].probability > maxProbability) {
            maxProbability = prediction[i].probability;
            spielerWahl = i;
        }
    }
}

function computerZug() {
    var max = 2;
    var min = 0;
    computerWahl = Math.floor(Math.random() * (max - min)) + min;
}
