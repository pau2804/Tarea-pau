function tablaMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    return resultado;
}

// Ejemplo de uso
document.getElementById('multiplicacion').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = tablaMultiplicar(numero);
    document.getElementById('resultado').innerHTML = resultado;
});