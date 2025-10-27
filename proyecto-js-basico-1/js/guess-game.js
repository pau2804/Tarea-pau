// Archivo que contiene la lógica del juego de adivinanza

let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número secreto entre 1 y 100

function verificar(numeroUsuario) {
    if (numeroUsuario < numeroSecreto) {
        return "El número es mayor. Intenta de nuevo.";
    } else if (numeroUsuario > numeroSecreto) {
        return "El número es menor. Intenta de nuevo.";
    } else {
        return "¡Felicidades! Has adivinado el número.";
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un nuevo número secreto
}