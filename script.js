const numCount = 100; // Número de elementos a mostrar
const speed = 20; // Velocidad de movimiento de los números (en píxeles)
const fontSize = 16; // Tamaño de fuente inicial (en píxeles)

// Crear elementos de números
for (let i = 0; i < numCount; i++) {
    const numElement = document.createElement('span');
    numElement.innerText = Math.floor(Math.random() * 10); // Número aleatorio del 0 al 9
    numElement.style.position = 'absolute';
    numElement.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
    numElement.style.top = `${Math.random() * 100}vh`; // Posición vertical aleatoria
    numElement.style.fontSize = `${fontSize}px`;
    document.getElementById('numbers').appendChild(numElement);
}

// Animar los números moviéndolos hacia arriba
setInterval(() => {
    const numElements = document.querySelectorAll('#numbers span');
    numElements.forEach(numElement => {
        const top = parseFloat(numElement.style.top);
        numElement.style.top = `${top - speed}px`;
        if (top < -fontSize) {
            numElement.style.top = '100vh';
        }
    });
}, 100); // Intervalo de tiempo para la animación

function Encriptar(){
    var entradaTexto = document.getElementById("entradaTexto").value;
     var encripTex = entradaTexto.replace(/a/g, 'fff')
                                 .replace(/e/g, 'ttt')
                                 .replace(/i/g, 'hhh')
                                 .replace(/o/g, 'aaa')
                                 .replace(/u/g, 'ooo');
    document.getElementById("salidaTexto").value = encripTex;
}


function Desencriptar(){
    var entradaTexto = document.getElementById("entradaTexto").value;
   
    var desencripText = entradaTexto.replace(/fff/g, 'a')
                                 .replace(/ttt/g, 'e')
                                 .replace(/hhh/g, 'i')
                                 .replace(/aaa/g, 'o')
                                 .replace(/ooo/g, 'u');
    document.getElementById("salidaTexto").value = desencripText;
}

function copyText() {
    var outputTextArea = document.getElementById("salidaTexto");
    
    // Seleccionar el texto dentro del área de texto
    outputTextArea.select();
    
    // Copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
    
    // Deseleccionar el texto
    window.getSelection().removeAllRanges();
}


