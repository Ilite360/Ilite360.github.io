<!DOCTYPE html>
<html lang="de">

<head>
    <link rel="stylesheet" type="text/css" href="Css.css" media="screen" /> 
    <style>
        #ComputerZug {

            max-width: 40%;
            max-height: 40%;
            min-width: 10%;
            min-height: 10%;
            top: 20%;
        }

        #ComputerSeite {
            position: absolute;
            width: 50%;
            height: 50%;
            float: left;
            margin: 5%;
        }

        #KameraSeite {
            width: 50%;
            height: 50%;
            float: left;
            margin-left: 55%;
            margin-top: 4.5%;
        }

        #runde {
            position: absolute;
            margin-left: 45%;
        }


        #Gewonnen {
            position: absolute;
            float: none;
            margin-left: 45%;
            margin-top: 40%;
        }
    </style>
</head>

<body>
    <p></p>
    <p id="gewonnen" style="text-align: center">Spiel läuft</p>
    <p id="einzaehlen" style="text-align: center">Schere, Stein, Papier</p>

    <div id="ComputerSeite">
        <p id="computerZaehler" style="margin-left: 5em">0</p>
        <h3 class="popup" onclick="popup()">Computer
        <img class = "popuptext" src="https://rp-online.de/imgs/32/2/4/5/6/0/7/6/1/tok_9cf1439611c575a8c9e3ac1d22839a91/w940_h528_x470_y264_3a542a5ddfea66a5.jpg" id="myPopup">
    </h3>
        <p id="computerWahl">Stein</p>
        <img id="ComputerZug" src="" alt="">
        
    </div>
    <div id="KameraSeite">
        <p id = "spielerZaehler" style="margin-left: 5em">0</p>
        <h3 class="popup" onclick="popup()">Spieler
        <img class = "popuptext" src="https://www.pngkey.com/png/detail/896-8960707_pin-von-punkrocknsfw-auf-reingeguckt-reingeguckt-png.png" id="myPopup">
    </h3>
        <p id="spielerWahl">Stein</p>
        
    </div>
    <button onclick="neueRunde()">Runde starten</button><button onclick="neuesSpiel()">Neues Spiel</button>
    <script src="Skripte/AlleFunktionen.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.3/dist/teachablemachine-image.min.js"></script>
    <script>
        initModell();
        neuesSpiel();
    </script>

</body>

</html>
