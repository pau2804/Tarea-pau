function contarPalabras(frase) {
    // Eliminar espacios en blanco al inicio y al final de la frase
    frase = frase.trim();
    
    // Si la frase está vacía, retornar 0
    if (frase === "") {
        return 0;
    }
    
    // Dividir la frase en palabras usando espacios como separador
    const palabras = frase.split(/\s+/);
    
    // Retornar el número de palabras
    return palabras.length;
}

// Ejemplo de uso
const fraseEjemplo = "Hola, este es un ejemplo de contador de palabras.";
console.log(`Número de palabras: ${contarPalabras(fraseEjemplo)}`);