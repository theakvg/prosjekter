bruksAnv.onclick = function () {
    console.log("heei");
    gameboard.style.opacity = 0.1;
    divBruksAnv.style.opacity = 1; 
    for (let br = 0; br < brikke.length; br++) {
        brikke[br].style.opacity = 0.1;
    };
    
};

<div id="divBruksAnv">
<h2>QUARTO</h2>
<p><b>Presentasjon:</b></p>
<p>-  Et spillebrett med 16 ruter</p>
<p>-  16 forskjellige brikker hver med 4 egenskaper: grønne eller gule, firkanta eller sirkelformet, rutenett eller ensfarget, liten sirkel eller ikke. </p>
<p><b>Hensikten med spillet:</b></p>
<p>Lage en linje av 4 brikker med minst en felles egenskap på brettet. Denne linjen kan være loddrett, vannrett eller diagonal.</p>
<p><b>Gjennomføring av en omgang </b></p>
<p>-  Spiller 1 starter først. </p>
<p>-  Vedkommende velger en av de 16 brikkene og gir denne til motparten. </p>
<p>-  Motparten plasserer denne brikken i en av rutene på brettet og velger deretter en av de 15 gjenværende brikkene som den gir til den første spilleren. </p>
<p>-  Den som begynte spillet, plasserer så denne brikken på en ledig rute osv. </p>
<p><b>Vinne en omgang </b></p>
<p>- Spilleren som setter den siste brikken i en rekke på 4 der alle har minst en felles egenskap vinner omgangen. </p>
<h3>LYKKE TIL !</h3>
</div>

#divBruksAnv {
    opacity: 0; 
    height: 600px;
    width: 600px;
    background: white;
    color: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    margin: none;
}
