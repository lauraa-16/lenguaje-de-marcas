document.addEventListener("DOMContentLoaded", function () {
    // Obtiene referencias a los elementos del DOM
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operacion = document.getElementById("operacion");
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");
    const calcular = document.getElementById("calcular");

    // Agrega un evento de clic al botón de calcular
    calcular.addEventListener("click", function () {
        // Limpia el mensaje de error y el resultado previo
        error.textContent = "";
        resultado.value = "";
        
        // Convierte los valores de entrada en números de punto flotante
        let valor1 = parseFloat(num1.value);
        let valor2 = parseFloat(num2.value);
        let oper = operacion.value;
        
        // Verifica si los valores ingresados son números válidos
        if (isNaN(valor1) || isNaN(valor2)) {
            error.textContent = "Por favor, ingrese números válidos en ambos campos.";
            error.style.color = "red";
            return;
        }
        
        // Verifica que se haya seleccionado una operación válida
        if (oper === "") {
            error.textContent = "Seleccione una operación.";
            error.style.color = "red";
            return;
        }
        
        let resultadoFinal;
        
        // Utiliza un switch para realizar la operación matemática seleccionada
        switch (oper) {
            case "suma":
                resultadoFinal = valor1 + valor2;
                break;
            case "resta":
                resultadoFinal = valor1 - valor2;
                break;
            case "multiplicacion":
                resultadoFinal = valor1 * valor2;
                break;
            case "division":
                // Controla la división por cero y muestra un mensaje de error si es el caso
                if (valor2 === 0) {
                    error.textContent = "No se puede dividir por 0.";
                    error.style.color = "red";
                    return;
                }
                resultadoFinal = valor1 / valor2;
                break;
            default:
                error.textContent = "Operación no válida.";
                error.style.color = "red";
                return;
        }
        
        // Muestra el resultado en el campo de texto correspondiente
        resultado.value = resultadoFinal;
    });
});
