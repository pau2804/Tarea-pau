function calcularPromedio(array) {
    if (array.length === 0) {
        return "El array está vacío.";
    }

    const suma = array.reduce((acc, num) => acc + num, 0);
    const promedio = suma / array.length;

    return promedio >= 6 ? 
        `El promedio es ${promedio}. ¡Aprobado!` : 
        `El promedio es ${promedio}. ¡Reprobado!`;
}