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

let nivelCadena = nivel.toString();
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

//Ejercicio 3
// Variables 
let dificultad = 2;
let expActual = 90;
let expGanada = 30;
let expNecesaria = 100;

if(expActual + expGanada >= expNecesaria) {
    nivel ++;
    expActual = (expActual + expGanada) - expNecesaria;
    expGanada = 0;  // Reinicio la experiencia ganada
}

console.log(
   "Dificultad: " + dificultad + " novato",
   "\nNivel: " + nivel,
   "\nExperiencia actual: " + expActual
);

//Ejercicio 4
let monedasCofre = [10, 20, 10];
let monedas = 0;
let atuendos = ["duende", "arquero", "caballero"];

for (let i = 1; i < monedasCofre.length; i++) {
    monedas += monedasCofre[i];
}

console.log(
    "Monedas totales: " + monedas
);

// Añadir un nuevo atuendo
atuendos.push("mago");

//Enseño los atuendos con un forEach
atuendos.forEach((atuendo, indice) => {
    console.log(`Atuendo ${indice}: ${atuendo}`);
});

// Función curar
function curar(puntosVida, puntosCuracion) {
    let vidaFinal = puntosVida + puntosCuracion;
    if (vidaFinal > VIDA_MAXIMA) {
        return;
    } else {
        return vidaFinal;
    }
};
console.log(
    "Puntos de vida antes de curar: " + puntosVida,
    "\nPuntos de vida después de curar: " + curar(puntosVida, 20)
);