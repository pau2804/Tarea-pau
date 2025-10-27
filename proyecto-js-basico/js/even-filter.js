function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = filtrarPares(numeros);

// Mostrar el resultado en un <ul>
const ul = document.createElement('ul');
pares.forEach(par => {
    const li = document.createElement('li');
    li.textContent = par;
    ul.appendChild(li);
});
document.body.appendChild(ul);