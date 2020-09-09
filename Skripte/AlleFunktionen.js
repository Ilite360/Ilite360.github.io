var computerWahl = 0, spielerWahl = 0, computerZaehler = 0, spielerZaehler = 0, runde = 0, gewonnen = 0;

function Sleep(milliseconds) {
    return new Promise (resolve => setTimeout(resolve, milliseconds));
}



async function neueRunde() {
    document.getElementById("einzaehlen").innerText = "Schere";
    await Sleep(1000);
    document.getElementById("einzaehlen").innerText = "Schere Stein";
    await Sleep(1000);
    document.getElementById("einzaehlen").innerText = "Schere Stein Papier";
    spielerZug();
    computerZug();
    updateSpielstand();
    runde++;
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
    if (computerWahl == 0) {
        document.getElementById("ComputerZug").src = "../Papier.png";
        document.getElementById("computerWahl").innerText = "Papier";
    }
    else if (computerWahl == 1){
        document.getElementById("ComputerZug").src = "../Stein.png";
        document.getElementById("computerWahl").innerText = "Stein";
    } 
    else if (computerWahl == 2){
        document.getElementById("ComputerZug").src = "../Schere.png";
        document.getElementById("computerWahl").innerText = "Schere";
    } 
}

function updateSpielstand() {

     if (computerWahl == 0 && spielerWahl == 1) {
        computerZaehler++;
    }
    else if (computerWahl == 0 && spielerWahl == 2) {
        spielerZaehler++;
    }
    else if (computerWahl == 1 && spielerWahl == 0) {
        spielerZaehler++;
    }
    else if (computerWahl == 1 && spielerWahl == 2) {
        computerZaehler++;
    }
    else if (computerWahl == 2 && spielerWahl == 0) {
        computerZaehler++;
    }
    else if (computerWahl == 2 && spielerWahl == 1) {
        spielerZaehler++;
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
    document.getElementById("spielerWahl").innerText = zahlzutext(spielerWahl);
    document.getElementById("computerZaehler").innerText = computerZaehler;
    document.getElementById("spielerZaehler").innerText = spielerZaehler;
    document.getElementById("gewonnen").innerText = "Runde: " + runde;
    
    if(gewonnen == 1){
        document.getElementById("gewonnen").innerText = "Der Computer hat gewonnen!";
    }
    else if (gewonnen == 2) {
        document.getElementById("gewonnen").innerText = "Du hast gewonnen!";
    }
    
}

function zahlzutext(zahl){
    switch(zahl){
        case 0:
            return "Papier";
            break;
        case 1:
            return "Stein";
            break;
        case 2:
            return "Schere";
            break;
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

    document.getElementById("KameraSeite").appendChild(webcam.canvas);

}

async function loop() {
    webcam.update();
    //await predict();
    window.requestAnimationFrame(loop);
}

function popup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}