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
    var max = 3;
    var min = 0;
    computerWahl = Math.floor(Math.random() * max);
}

function updateSpielstand() {

     if (computerWahl == 0 && spielerWahl == 1) {
        spielerZaehler++;
    }
    else if (computerWahl == 0 && spielerWahl == 2) {
        computerZaehler++;
    }
    else if (computerWahl == 1 && spielerWahl == 0) {
        computerZaehler++;
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
    // Gewonnen-------------------------------
    if (computerZaehler == 3) {
        gewonnen = 1;
    }
    else if (spielerZaehler == 3) {
        gewonnen = 2;
    }

}

function updateGUI() {

    document.getElementById("computerWahl").innerText = zahlzutext(computerWahl);
    document.getElementById("spielerWahl").innerText = zahlzutext(spielerWahl);
    document.getElementById("computerZaehler").innerText = computerZaehler;
    document.getElementById("spielerZaehler").innerText = spielerZaehler;
    document.getElementById("runde").innerText = runde;
    document.getElementById("gewonnen").innerText = gewonnen;
}

function zahlzutext(zahl){
    if(zahl==0){
        return "Stein";
    }
    else if(zahl==1){
        return "Papier";
    }
    else if(zahl==2){
        return "Schere";
    }
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

    document.getElementById('KameraSeite').appendChild(webcam.canvas);

}

async function loop() {
    webcam.update();
    //await predict();
    window.requestAnimationFrame(loop);
}

