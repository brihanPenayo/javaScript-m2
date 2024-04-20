let mi_input = document.querySelector('input');

let mi_palabra = 'PERRO' // no es lo mismo que 'gatos';

let mi_arreglo = [19, 2, 3, 4, 90]


mi_palabra.toUpperCase(); //convertir la palabra a mayusculas
mi_palabra.toLowerCase(); //convertir la palabra a minusculas

const MIS_FILAS = document.querySelectorAll('.filas')

let intento = 0;

function verificarPalabra() {
    if (intento < MIS_FILAS.length - 1) {
        let palabraLeida = mi_input.value.toUpperCase();
        for (let i = 0; i < palabraLeida.length; i++) {

            MIS_FILAS[intento].children[i].innerText = palabraLeida[i];

            if (palabraLeida[i] == mi_palabra[i]) {
                console.log("la letra está en su posición correcta")
                MIS_FILAS[intento].children[i].classList.add('letraCorrecta')

            } else if (mi_palabra.includes(palabraLeida[i])) {
                console.log("la letra está, pero no en su posición correcta")
                MIS_FILAS[intento].children[i].classList.add('letraExiste')

            } else {
                console.log("la letra no está")
                MIS_FILAS[intento].children[i].classList.add('letraNoExiste')
            }

        }
        if (palabraLeida == mi_palabra) {
            alert("Has ganado")
            intento = MIS_FILAS.length
            mi_input.disabled = true
        }
    } else {
        alert("Has perdido")
    }
    intento++;
}

mi_input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        verificarPalabra()
    }
})

