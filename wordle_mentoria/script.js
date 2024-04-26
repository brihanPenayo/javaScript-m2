let mi_palabra

// async / await

// Funcion con Async/await
async function traerPalabra() {
    const res = await fetch('https://random-word-api.herokuapp.com/word?length=5')
    const data = await res.json()
    mi_palabra = await data[0].toUpperCase()
}


traerPalabra()

console.log(mi_palabra)
// Funcion SIN Async/await
// function traerPalabra() {
//     fetch('https://random-word-api.herokuapp.com/word?length=5')
//         .then(res => res.json())
//         .then(data => {
//             mi_palabra = data[0]
//         })
// }

let mi_input = document.querySelector('input');

let mi_arreglo = [19, 2, 3, 4, 90]

// mi_palabra.toUpperCase(); //convertir la palabra a mayusculas
// mi_palabra.toLowerCase(); //convertir la palabra a minusculas

const MIS_FILAS = document.querySelectorAll('.filas')

let intento = 0;

function verificarPalabra() {
    console.log(mi_palabra)
    if (intento < MIS_FILAS.length) {
        let palabraLeida = mi_input.value.toUpperCase();
        for (let i = 0; i < palabraLeida.length; i++) {
            // setTimeout(() => {
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
            // }, 200 * i)
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
        if (mi_palabra.length > 1) verificarPalabra()
        // setTimeout(() => {
        //     intento++
        // }, 1000)
    }
})

// OBJETOS EN JAVASCRIPT
let miArray = ["hola", "desde", "array"]

let miObjeto = {
    nombre: "Pedro",
    edad: 15,
    hijos: ["Ana", "Peter", "Laura"],
    imprimirEdad: function () {
        console.log(this.edad)
    },
    imprimirNombre: function () {
        console.log(this.nombre)
    },
    familiares: {
        hermanos: 3,
        nombres: ["Tio Lucas", "Tia Erica"]
    },
    miArreglo: miArray
}

// console.log(miObjeto)
// console.log(miObjeto.nombre)
// console.log(miObjeto.edad)
// console.log(miObjeto.imprimirEdad())
// console.log(miObjeto.imprimirNombre())

// dimos enter
// variable intento vale 0
// entro el for 
// set time out se puso en la cola de ejecucion
// set time out se puso en la cola de ejecucion para intentos
// setTimeOut ahora recién se ejecuta
// setTimeOut ahora recién se ejecuta
// mi variable intento vale 1

