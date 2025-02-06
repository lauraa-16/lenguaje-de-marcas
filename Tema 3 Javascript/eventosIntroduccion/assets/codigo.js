// Mensaje cuando carga la página
document.addEventListener("DOMContentLoaded", function() {
    alert("Bienvenidos a la práctica de eventos");
});

// Capa 1 (clic en el párrafo)
document.querySelector("#capa1").addEventListener("click", function() {
    alert("Has realizado un click");
});

// Evento para la capa 2 (clic en la imagen de la manzana)
document.querySelector("#capa2 img").addEventListener("click", function() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        alert("El número máximo es " + Math.max(num1, num2));
    }
});

// Capa 3 (cuando el cursor deje la imagen del leon)
document.querySelector("#capa3 img").addEventListener("mouseleave", function() {
    let num = parseInt(prompt("Introduce un número:"));
    
    if (isNaN(num)) {
        alert("El número no es válido");
    } else {
        alert("El número " + num + " es " + (num % 2 === 0 ? "par" : "impar"));
    }
});

// Capa 4 (doble clic en el párrafo)
document.querySelector("#capa4").addEventListener("dblclick", function() {
    alert("Has realizado un doble click");
});

// Capa 5 (contar clics en el botón)
let contador = 0;
document.querySelector("#boton").addEventListener("click", function() {
    contador++;
    alert("Has pulsado el botón " + contador + " veces");
});

// Capa 6 (entrada del cursor)
document.querySelector("#capa6").addEventListener("mouseenter", function() {
    let num1 = parseInt(prompt("Introduce el primer número:"));
    let num2 = parseInt(prompt("Introduce el segundo número:"));
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("El número no es válido");
    } else {
        alert("La multiplicación de " + num1 + " y " + num2 + " es " + (num1 * num2));
    }
});