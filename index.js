const premios = [
  { id: 0, nombre: "RESTAU.TODO", imagen: "RESTAUTODO.svg" },
  { id: 1, nombre: "X2 MAX POCIÓN", imagen: "MAXPOCION.svg" },
  { id: 2, nombre: "EEVEE", imagen: "EEVEE.svg" },
  { id: 3, nombre: "PERISCOPIO", imagen: "PERISCOPIO.svg" },
  { id: 4, nombre: "PIEDRA TRUENO", imagen: "PIEDRATRUENO.svg" },
  { id: 5, nombre: "PIEDRA AGUA", imagen: "PIEDRAAGUA.svg" },
  { id: 6, nombre: "PIEDRA NOCHE", imagen: "PIEDRANOCHE.svg" },
  { id: 7, nombre: "PIEDRA HOJA", imagen: "PIEDRAHOJA.svg" },
  { id: 8, nombre: "PIEDRA FUEGO", imagen: "PIEDRAFUEGO.svg" },
  { id: 9, nombre: "ZUMO DE BAYA", imagen: "ZUMODEBAYA.svg" },
  { id: 10, nombre: "X100 ULTRABALL", imagen: "ULTRABALL.svg" },
  { id: 11, nombre: "X10 ESC.CORAZÓN", imagen: "ESCCORAZON.svg" },
  { id: 12, nombre: "TAILLOW", imagen: "TAILLOW.svg" },
  {
    id: 13,
    nombre: "ATRAPAR DOS POKEMON DE RUTA",
    imagen: "POKEBALL.svg",
  },
  { id: 14, nombre: "ESC.CORAZÓN", imagen: "ESCCORAZON.svg" },
  { id: 15, nombre: "MAGIKARP", imagen: "MAGIKARP.svg" },
  { id: 16, nombre: "BANDA FOCUS", imagen: "BANDAFOCUS.svg" },
  { id: 17, nombre: "CINTA FOCUS", imagen: "CINTAFOCUS.svg" },
  { id: 18, nombre: "ALEATORIO DE LA POKÉDEX", imagen: "POKEDEX.png" },
  { id: 19, nombre: "NATU", imagen: "NATU.svg" },
  { id: 20, nombre: "ALTARIA", imagen: "ALTARIA.svg" },
  { id: 21, nombre: "NUMEL", imagen: "NUMEL.svg" },
  { id: 22, nombre: "PIEDRA SOLAR", imagen: "PIEDRASOLAR.svg" },
  { id: 23, nombre: "PAÑUELO SEDA", imagen: "PANUELOSEDA.svg" },
  { id: 24, nombre: "1 VIDA", imagen: "VIDAEXTRA.png" },
  { id: 25, nombre: "RESURRECCIÓN", imagen: "REVIVIR.svg" },
  { id: 26, nombre: "FICHAS DEL CASINO", imagen: "MONEDERO.svg" },
  { id: 27, nombre: "NADA", imagen: "SUSTITUTO.svg" },
  { id: 28, nombre: "MASTERBALL", imagen: "MASTERBALL.svg" },
  { id: 29, nombre: "ROCÍO BONDAD", imagen: "ROCIOBONDAD.svg" },
  { id: 30, nombre: "FLECHA VENENOSA", imagen: "FLECHAVENENOSA.svg" },
  { id: 31, nombre: "CAMPANA ALIVIO", imagen: "CAMPANAALIVIO.svg" },
  { id: 32, nombre: "-1 VIDA (NO AFECTA EN LA VIDA 0)", imagen: "PIERDEVIDAS.png" },
  { id: 33, nombre: "CINTURÓN NEGRO", imagen: "CINTURONNEGRO.svg" },
  { id: 34, nombre: "CAMPANA CONCHA", imagen: "CAMPANACONCHA.svg" },
  { id: 35, nombre: "REVESTIMIENTO METÁLICO", imagen: "REVMETALICO.svg" },
  { id: 36, nombre: "HIERBA BLANCA", imagen: "HIERBABLANCA.svg" },
  { id: 37, nombre: "PICO AFILADO", imagen: "PICOAFILADO.svg" },
  { id: 38, nombre: "CINTA ELEGIDA", imagen: "CINTAELEGIDA.svg" },
  { id: 39, nombre: "FÓSIL RAIZ", imagen: "FOSILRAIZ.svg" },
  {
    id: 40,
    nombre: "RESURRECCIÓN +1 VIDA",
    imagen: "MAXREVIVIR.svg",
  },
  { id: 41, nombre: "GRIEZMANN", imagen: "STRIKER.svg" },
  { id: 42, nombre: "INICIAL PRIMERA GEN", imagen: "OAK.svg" },
  { id: 43, nombre: "RHYHORN", imagen: "RHYHORN.svg" },
  { id: 44, nombre: "ELEKID", imagen: "ELEKID.svg" },
  { id: 45, nombre: "X5 ESC.CORAZÓN", imagen: "ESCCORAZON.svg" },
  { id: 46, nombre: "CUCHARA TORCIDA", imagen: "CUCHARATORCIDA.svg" },
  { id: 47, nombre: "MAGBY", imagen: "MAGBY.svg" },
  {
    id: 48,
    nombre: "LEGENDARIO PROHIBIDO",
    imagen: "RAYQUAZA.svg",
  },
  { id: 49, nombre: "METAGROSS", imagen: "METAGROSS.svg" },
  { id: 50, nombre: "HUESO GRUESO", imagen: "HUESOGRUESO.svg" },
  { id: 51, nombre: "INICIAL SEGUNDA GEN", imagen: "ELM.jpg" },
  { id: 52, nombre: "HARIYAMA", imagen: "HARIYAMA.svg" },
  { id: 53, nombre: "IMÁN", imagen: "IMAN.svg" },
  { id: 54, nombre: "AGUA MÍSTICA", imagen: "AGUAMISTICA.svg" },
  { id: 55, nombre: "ARENA FINA", imagen: "ARENAFINA.svg" },
  { id: 56, nombre: "SEMILLA MILAGRO", imagen: "SEMMILAGRO.svg" },
  { id: 57, nombre: "COLMILLO DRAGON", imagen: "COLMDRAGON.svg" },
  { id: 58, nombre: "HECHIZO", imagen: "HECHIZO.svg" },
  { id: 59, nombre: "CLAYDOL", imagen: "CLAYDOL.svg" },
  { id: 60, nombre: "FLYGON", imagen: "FLYGON.svg" },
  { id: 61, nombre: "INICIAL GEN 3", imagen: "ABEDUL.svg" },
  { id: 62, nombre: "KINGDRA", imagen: "KINGDRA.svg" },
  { id: 63, nombre: "X5 MAX POCIÓN", imagen: "MAXPOCION.svg" },
  { id: 64, nombre: "FÓSIL GARRA", imagen: "FOSILGARRA.svg" },
  { id: 65, nombre: "X3 RESTAURAR TODO", imagen: "RESTAUTODO.svg" },
  { id: 66, nombre: "RESTOS", imagen: "RESTOS.svg" },
  { id: 67, nombre: "CARBÓN", imagen: "CARBON.svg" },
];

let txt = "";
premios.forEach((premio, index) => {
  txt +=
    '<div id="resultado' +
    index +
    '" class="resultado"><h1 id="texto' +
    index +
    '">' +
    premio.nombre +
    '</h1> <img id="imagen' +
    index +
    '" height="300px" src="img/' +
    premio.imagen +
    '" alt="img-' +
    premio.nombre +
    '" /></div>';
});
window.document.getElementById("conjunto").innerHTML =
  txt + window.document.getElementById("conjunto").innerHTML;
txt = "";

let visible = Math.floor(Math.random() * premios.length);
window.document.getElementById("resultado" + visible).style.display = "flex";

let running = true;
ruleta = setInterval(girar, 600);

function girar() {
  num = Math.floor(Math.random() * premios.length);
  window.document.getElementById("resultado" + visible).style.display = "none";
  visible = num;
  window.document.getElementById("resultado" + num).style.display = "flex";
}

function boton() {
  if (!window.document.getElementById("boton").disabled) {
    window.document.getElementById("boton").disabled = true;

    if (running) {
      running = false;
      clearInterval(ruleta);
      ruleta = setInterval(girar, 1200);
      setTimeout(pararRuleta, 6000);
    } else {
      window.document
        .getElementById("imagen" + visible)
        .classList.remove("animated");
      running = true;
      ruleta = setInterval(girar, 600);
      setTimeout(girarRuleta, 1500);
    }
  }
}

function pararRuleta() {
  clearInterval(ruleta);
  window.document.getElementById("boton").value = "GIRAR RULETA";
  window.document.getElementById("boton").disabled = false;
  window.document.getElementById("imagen" + visible).classList.add("animated");
}

function girarRuleta() {
  window.document.getElementById("boton").value = "PARAR RULETA";
  window.document.getElementById("boton").disabled = false;
}

function tecla(e) {
  if (e.keyCode == 13 || e.keyCode == 32) {
    boton();
  }
}

/*
let prlog =
  "RESTAU.TODO,X2 MAX POCIÓN,EEVEE,PERISCOPIO,PIEDRA TRUENO,PIEDRA AGUA,PIEDRA NOCHE,PIEDRA HOJA,PIEDRA FUEGO,ZUMO DE BAYA,X100 ULTRABALL,X10 ESC.CORAZÓN,TAILLOW,ATRAPAR DOS POKEMON DE RUTA,ESC.CORAZÓN,Magikarp,Banda Focus,Cinta Focus,Aleatorio de la Pokédex,NATU,ALTARIA,NUMEL,piedra solar,pañuelo seda,1 VIDA,RESURRECCIÓN,fichas del casino,Nada,masterball,rocío bondad,flecha venenosa,Campana Alivio,-1 vida. (Si no tienes no te haría efecto),cinturón negro,campana concha,revestimiento metálico,hierba blanca,pico afilado,cinta elegida,fósil de cradily,reSURRECCIÓN +1 vida,griezmann,inicial primera gen,rhyhorn,elekid,X5 ESC.CORAZÓN,cuchara torcida,magby,legendario prohibido,metagross,hueso grueso,inicial segunda gen,hariyama,imán,agua mística,ARENA FINA,SEMILLA MILAGRO,colmillo dragon,HECHIZO,claydol,flygon,inicial gen 3,kingdra,X5 MAX POCIÓN,FOSIL De armaldo,X3 RESTAURAR TODO,restos";
let prlogarr = prlog.split(",");
prlog = "";
for (var i = 0; i < prlogarr.length; i++) {
  if (i > 0) prlog += ",";
  prlog +=
    "{id: " +
    i +
    ', nombre: "' +
    prlogarr[i].toUpperCase() +
    '", imagen: "' +
    prlogarr[i].toUpperCase().replace(/ /g, "-").replace(".", "") +
    '.svg"}';
}
console.log(prlog);
*/
