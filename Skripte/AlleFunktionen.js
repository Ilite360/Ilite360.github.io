let computerWahl = 0, spielerWahl = 0, computerZaehler = 0, spielerZaehler = 0, runde = 0, gewonnen = 0;

function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}



async function neueRunde() {
    document.getElementById("einzaehlen").innerText = "Schere";
    await Sleep(3000);
    document.getElementById("einzaehlen").innerText = "Schere Stein";
    await Sleep(3000);
    document.getElementById("einzaehlen").innerText = "Schere Stein Papier";
    spielerZug();
    computerZug();
    updateSpielstand();
    updateGUI();
}

function neuesSpiel() {
    runde = 0;
    computerZaehler = 0;
    spielerZaehler = 0;
    gewonnen = 0;
    updateGUI();
}

async function spielerZug() {
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

function updateSpielerstand() {

    if (computerWahl == 0 && spielerWahl == 0) {
        computerZaehler = computerZaehler;
        spielerZaehler = spielerZaehler;
    }
    else if (computerWahl == 0 && spielerWahl == 1) {
        spielerZaehler++;
    }
    else if (computerWahl == 0 && spielerWahl == 2) {
        computerZaehler++;
    }
    else if (computerWahl == 1 && spielerWahl == 0) {
        computerZaehler++;
    }
    else if (computerWahl == 1 && spielerWahl == 1) {
        computerZaehler = computerZaehler;
        spielerZaehler = spielerZaehler;
    }
    else if (computerWahl == 1 && spielerWahl == 2) {
        spielerZaehler++;
    }
    else if (computerWahl == 2 && spielerWahl == 0) {
        spielerZaehler++;
    }
    else if (computerWahl == 2 && spielerWahl == 1) {
        computerZaehler++;
    }
    else if (computerWahl == 2 && spielerWahl == 2) {
        computerZaehler = computerZaehler;
        spielerZaehler = spielerZaehler;
    }
    // Gewonnen-------------------------------
    if (computerZaehler == 3) {
        gewonnen = 1;
    }
    if (spielerZaehler == 3) {
        gewonnen = 2;
    }
    if (computerZaehler || spielerZaehler != 3) {
        gewonnen = 0;
    }

}

function updateGUI() {

    document.getElementById("computerWahl").innerText = computerWahl;
    document.getElementById("spielerWahl").innerText = spielerWahl;
    document.getElementById("computerZaehler").innerText = computerZaehler;
    document.getElementById("spielerZaehler").innerText = spielerZaehler;
    document.getElementById("runde").innerText = runde;
    document.getElementById("gewonnen").innerText = gewonnen;
}

// JavaScript source code
const URL = 'https://teachablemachine.withgoogle.com/models/FXEXfyFmU/';

let model, webcam, labelContainer, maxPredictions;

async function initModell() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    webcam.play();
    window.requestAnimationFrame(loop);


    document.getElementById('webcam-container').appendChild(webcam.canvas);
    labelContainer = document.getElementById('label-container');
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement('div'));
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

