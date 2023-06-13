const premios = [
  { nombre: "RESTAU. TODO", imagen: "restautodo.png" },
  { nombre: "x2 MAX POCIÓN", imagen: "maxpocion.png" },
  { nombre: "EEVEE", imagen: "eevee.png" },
  { nombre: "PERISCOPIO", imagen: "periscopio.png" },
  { nombre: "PIEDRA TRUENO", imagen: "ptrueno.png" },
  { nombre: "PIEDRA AGUA", imagen: "pagua.png" },
  { nombre: "PIEDRA NOCHE", imagen: "pnoche.png" },
  { nombre: "PIEDRA HOJA", imagen: "phoja.png" },
  { nombre: "PIEDRA FUEGO", imagen: "pfuego.png" },
  { nombre: "GLOBO HELIO", imagen: "globohelio.png" },
  { nombre: "X100 ULTRABALL", imagen: "ultraball.png" },
  { nombre: "X10 ESC. CORAZÓN", imagen: "esccorazon.png" },
  { nombre: "HIERBA ÚNICA", imagen: "hunica.png" },
  { nombre: "ATRAPAR DOS POKEMON DE RUTA", imagen: "pokeball.png" },
  { nombre: "ESC. CORAZÓN", imagen: "esccorazon.png" },
  { nombre: "MAGIKARP", imagen: "magikarp.png" },
  { nombre: "BANDA FOCUS", imagen: "bandafocus.png" },
  { nombre: "CINTA FOCUS", imagen: "cintafocus.png" },
  { nombre: "ALEATORIO DE LA POKÉDEX", imagen: "pokedex.png" },
  { nombre: "SNEASEL", imagen: "sneasel.png" },
  { nombre: "ALTARIA", imagen: "altaria.png" },
  { nombre: "HIPPOWDON", imagen: "hippowdon.png" },
  { nombre: "PIEDRA SOLAR", imagen: "psolar.png" },
  { nombre: "PAÑUELO SEDA", imagen: "pseda.png" },
  { nombre: "+1 VIDA", imagen: "vida.png" },
  { nombre: "RESURRECCIÓN", imagen: "revivir.png" },
  { nombre: "GARRA AFILADA", imagen: "gafilada.png" },
  { nombre: "NADA XD", imagen: "sandshdrew.png" },
  { nombre: "MASTERBALL", imagen: "masterball.png" },
  { nombre: "VIDASFERA", imagen: "vidasfera.png" },
  { nombre: "TABLA DE ARCEUS (A ELEGIR)", imagen: "tabla.png" },
  { nombre: "CAMPANA ALIVIO", imagen: "calivio.png" },
  { nombre: "-1 VIDA (NO CUENTA VIDA 0)", imagen: "vidant.png" },
  { nombre: "TOXIESFERA", imagen: "toxiesfera.png" },
  { nombre: "CAMPANA CONCHA", imagen: "cconcha.png" },
  { nombre: "REV. METÁLICO", imagen: "rmetal.png" },
  { nombre: "LLAMASFERA", imagen: "llamasfera.png" },
  { nombre: "MAGMATIZADOR", imagen: "magmatizador.png" },
  { nombre: "CINTA ELEGIDA", imagen: "celegida.png" },
  { nombre: "FÓSIL DE CORAZA", imagen: "fcoraza.png" },
  { nombre: "RESURRECIÓN +1 VIDA", imagen: "maxrevivir.png" },
  { nombre: "GRIEZMANN", imagen: "griezmann.jpg" },
  { nombre: "INICIAL PRIMERA GEN.", imagen: "proak.png" },
  { nombre: "PROTECTOR", imagen: "protector.png" },
  { nombre: "ELECTRIZADOR", imagen: "electrizador.png" },
  { nombre: "X5 ESC. CORAZÓN", imagen: "esccorazon.png" },
  { nombre: "CUCHARA TORCIDA", imagen: "ctorcida.png" },
  { nombre: "SPIRITOMB", imagen: "spiritomb.png" },
  { nombre: "LEGENDARIO PROHIBIDO", imagen: "arceus.png" },
  { nombre: "BRONZONG", imagen: "bronzong.png" },
  { nombre: "PIEDRA DÍA", imagen: "pdia.png" },
  { nombre: "INICIAL SEGUNDA GEN.", imagen: "prelm.png" },
  { nombre: "MACHAMP", imagen: "machamp.png" },
  { nombre: "GAFAS ESPECIALES", imagen: "gespeciales.png" },
  { nombre: "AGUA MÍSTICA", imagen: "amistica.png" },
  { nombre: "ARENA FINA", imagen: "afina.png" },
  { nombre: "SEMILLA MILAGRO", imagen: "smilagro.png" },
  { nombre: "ROCIO BONDAD", imagen: "rbondad.png" },
  { nombre: "HECHIZO", imagen: "hechizo.png" },
  { nombre: "DRAPION", imagen: "drapion.png" },
  { nombre: "STARAPTOR", imagen: "staraptor.png" },
  { nombre: "INICIAL TERCERA GEN.", imagen: "prabedul.png" },
  { nombre: "GARCHOMP", imagen: "garchomp.png" },
  { nombre: "X5 MAX POCIÓN", imagen: "maxpocion.png" },
  { nombre: "FÓSIL CRÁNEO", imagen: "fcraneo.png" },
  { nombre: "X3 RESTAU. TODO", imagen: "restautodo.png" },
  { nombre: "RESTOS", imagen: "restos.png" },
  { nombre: "CARBÓN", imagen: "carbon.png" },
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
