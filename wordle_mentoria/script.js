let mi_input = document.querySelector('input');

let mi_palabra = 'GATOS';

mi_palabra.toUpperCase(); //convertir la palabra a mayusculas
mi_palabra.toLowerCase(); //convertir la palabra a minusculas

function verificarPalabra() {
    let palabraLeida = mi_input.value.toUpperCase()
    if (palabraLeida == mi_palabra) {
        console.log('Palabra correcta')
    } else {
        console.log('Palabra incorrecta')
    }
}

mi_input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarPalabra()
    }
})

