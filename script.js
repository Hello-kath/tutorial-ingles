// Función para incrementar el tamaño del botón con el id dado
function incrementarTamano(botonId) {
    const boton = document.getElementById(botonId);
    let currentSize = window.getComputedStyle(boton).fontSize;
    let newSize = parseFloat(currentSize) * 1.2; // Incrementa el tamaño en un 20%
    boton.style.fontSize = newSize + 'px';
}

// Selecciona los botones por su id
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');

// Asocia la función de incremento con el evento de clic en el botón "No"
botonNo.addEventListener('click', () => incrementarTamano('si'));

// Asocia el evento de clic en el botón "Sí" para redirigir a otro HTML
botonSi.addEventListener('click', () => {
    window.location.href = 'si.html'; // Reemplaza con la ruta de tu archivo HTML
});