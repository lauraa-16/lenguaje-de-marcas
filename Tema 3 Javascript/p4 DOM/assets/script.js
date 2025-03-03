document.addEventListener("DOMContentLoaded", () => {
    // Modificar color del párrafo al pasar el mouse
    const capa1 = document.querySelector("#capa1");
    capa1.addEventListener("mouseenter", () => capa1.style.color = "red");
    capa1.addEventListener("mouseleave", () => capa1.style.color = "black");

    // Alternar imagen en Capa 2 al pasar el mouse
    const foto = document.querySelector("#foto");
    foto.addEventListener("mouseenter", () => {
        foto.src = foto.src.includes("manzana.png") ? "./assets/rajoy.png" : "./assets/manana.png";
    });

    // Verificar edad ingresada en Capa 3
    const inputEdad = document.querySelector("#edad");
    const botonVerificar = document.querySelector("#verificar");
    const mensaje = document.querySelector("#mensaje");
    botonVerificar.addEventListener("click", () => {
        const edad = parseInt(inputEdad.value);
        if (isNaN(edad)) {
            mensaje.innerHTML = "<b>Introduce un número válido</b>";
            inputEdad.style.border = "2px solid red";
        } else if (edad >= 1 && edad <= 100) {
            mensaje.innerHTML = "<b>Número correcto</b>";
            inputEdad.style.border = "2px solid green";
        } else {
            mensaje.innerHTML = "<b>Introduce un valor entre 1 y 100</b>";
            inputEdad.style.border = "2px solid red";
        }
    });

    // Alternar fondo en Capa 4 usando classList.toggle
    const botonFondo = document.querySelector("#cambiarFondo");
    const capasNegras = document.querySelectorAll(".grid-item");
    botonFondo.addEventListener("click", () => {
        capasNegras.forEach(capa => capa.classList.toggle("fondo-rojo"));
    });

    // Cambiar estilos en Capa 5 con botones
    const capa5 = document.querySelector("#capa5");
    document.querySelector("#estilo1").addEventListener("click", () => {
        capa5.style.backgroundColor = "black";
        capa5.style.color = "white";
    });
    document.querySelector("#estilo2").addEventListener("click", () => {
        capa5.style.backgroundColor = "white";
        capa5.style.color = "black";
    });
    document.querySelector("#estilo3").addEventListener("click", () => {
        capa5.style.backgroundColor = "gray";
        capa5.style.color = "red";
    });
});

// Inicialmente se crean las cajas sin imagen
// Capa 1: Cambiar color del texto al pasar el mouse
const evento1 = document.querySelector('.cambiarColor');
evento1.addEventListener("mouseenter", () => {evento1.style.color = "red";});
evento1.addEventListener("mouseleave", () => {evento1.style.color = "black";});

// Capa 3: Cambiar imagen al pasar el mouse
const evento2 = document.querySelector(".imagen2");
evento2.addEventListener("mouseover", cambiarImagen);

function cambiarImagen() {
    const image = document.querySelector(".imagen2");
    const nombreImagen = image.src.split("/").pop();
    
    if (nombreImagen === "ghost.png") {
        image.src = "./assets/rajoy.png";
    } else {
        image.src = "./assets/ghost.png";
    }
}

// Capa 5: Verificar si la edad ingresada está entre 1 y 100
const evento3 = document.querySelector("#botonEdad");
evento3.addEventListener("click", verificaEdad);

function verificaEdad() {
    const input = document.querySelector("#input");
    const num = parseInt(input.value);
    if (!isNaN(num)) {
        if (num >= 1 && num <= 100) {
            input.style.borderColor = "green";
            alert("El número es válido");
        } else {
            input.style.borderColor = "red";
            alert("El número no es válido");
        }
    } else {
        input.style.borderColor = "red";
        alert("Por favor, ingrese un número válido");
    }
}

// Cambiar estilo según el botón
const boton1 = document.querySelector(".boton1");
const boton2 = document.querySelector(".boton2");
const boton3 = document.querySelector(".boton3");
const a = document.querySelector(".caja9");

boton1.addEventListener("click", () => {
    a.style.color = "white";
    a.style.backgroundColor = "black";
});
boton2.addEventListener("click", () => {
    a.style.color = "black";
    a.style.backgroundColor = "white";
});
boton3.addEventListener("click", () => {
    a.style.color = "red";
    a.style.backgroundColor = "grey";
});

// Alternar color de fondo entre negro y rojo
const capa = document.querySelectorAll(".fondoNegro");
const b1 = document.querySelector(".boton");
b1.addEventListener("click", () => cambiaFondos(capa));

function cambiaFondos(capa) {
    capa.forEach(a => {a.classList.toggle("fondoRojo")});
}
