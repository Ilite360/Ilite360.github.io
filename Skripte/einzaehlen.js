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