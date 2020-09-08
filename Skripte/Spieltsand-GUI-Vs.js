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
