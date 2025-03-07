/*
* Ejercicio 1
* Estado del heroe
* Constantes */
const VIDA_MAXIMA = 100;
const NOMBRE = "Éxarion";
const ARMA_PRINCIPAL = "Espada del Destino";

// Variables
let puntosVida = 100;
let nivel = 5;
let armaSecundaria = "Arco simple";
let armaduraEquipada = true;

// Saco por pantalla el estado del heroe

console.log(
    "Estado del héroe: ",
    "\nNombre: " + NOMBRE,
    "\nNivel: " + nivel,
    "\nPuntos de vida: " + puntosVida,
    "\nArma principal: " + ARMA_PRINCIPAL,
    "\nArma secundaria: " + armaSecundaria,
    "\nArmadura equipada: " + armaduraEquipada,
);

// El héroe entra en combate

nivel ++;
puntosVida -= 30;

// Lo muestro por consola

console.log(
    `Estado del héroe después del combate:
    Nombre: ${NOMBRE}
    Nivel: ${nivel}
    Puntos de vida: ${puntosVida}
    Arma principal: ${ARMA_PRINCIPAL}
    Arma secundaria: ${armaSecundaria}
    Armadura equipada: ${armaduraEquipada}`
);

// Ejercicio 2

let nivelCadena = toString(nivel);
let puntosFloat = parseFloat(puntosVida);

console.log(
    "Nivel Cadena: " + nivelCadena,
    "\nPuntos Float: " + puntosFloat
);

// Mejorar el combate del héroe
let danyoBase = 50;
let mulCritico = 2;
let probCritico = 0.5;
let esCritico = probCritico > Math.random();
let danyoTotal = esCritico ? danyoBase * mulCritico : danyoBase;

console.log(
    "El héroe inflige " + danyoTotal + 
    " puntos de daño porque esCritico tiene valor " +
    esCritico
);
