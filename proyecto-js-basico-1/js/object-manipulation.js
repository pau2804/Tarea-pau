const estudiante = {
    nombre: "Juan Pérez",
    edad: 20,
    calificaciones: [85, 90, 78, 92]
};

function promedioEstudiante(estudiante) {
    const total = estudiante.calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
    const promedio = total / estudiante.calificaciones.length;
    mostrarPromedio(estudiante.nombre, promedio);
}

function mostrarPromedio(nombre, promedio) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `El promedio de ${nombre} es ${promedio.toFixed(2)}`;
}

// Llamada a la función para calcular y mostrar el promedio
promedioEstudiante(estudiante);