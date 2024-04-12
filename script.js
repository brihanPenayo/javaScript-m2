// La forma de declarar una variable es la siguiente:



// "H" -> CHAR
// Cadenga de caracteres -> STRING

var miTexto; // declarando una variable

miTexto = 'Hola Mundo' // asignando un valor a la variable

var miTexto2 = 'Hola Mundo 2' // declarando y asignando un valor a la variable

let miTexto3 = 'Hola mundo 3' // declarando variable con LET

let miCaracter = 'H'

// let miNumero = 1

// let miNumero2 = '2'

let miBoolean = true // false

// String, Char, Boolean, Number

const miConstante = 'Esto es una constante'

let miNumero3 = '2'

// miConstante = "Esto es otra cosa"

console.log("Hola desde la consola")


let miNumero = 1 // convierte a un char
let miNumero2 = '2' //

// "1"+"2" = "12"
console.log('Cualquier numero:', 3)
console.log(miNumero + miNumero2)



// let resultado = n1 / n2

// || // OR
// && // AND


let n1 = 10
let n2 = 20
let n3 = 30
// Condicionales de JavaScript
if (n1 > n2 && n1 > n3) {
    // va a ejecutar lo que esté dentro de las llaves
    console.log('n1 es el mayor que n2 y n3 y el valor es: ', n1)
} else if (n2 > n1 && n2 > n3) {
    console.log('n2 es el mayor que n1 y n3 y el valor es: ', n2)
} else {
    console.log('n3 es el mayor que n1 y n3 y el valor es: ', n3)
    // TEMPLATE STRING
    // console.log(`n2 es mayor que n1 y el valor es: ${n2}`)
}

let m1 = 2 // este es un 2 pero de tipo number
let m2 = 2 // este es un 2 pero de tipo string
if (m1 == m2) {
    console.log('Son iguales, pero de tipos diferentes')
}
if (m1 === m2) {
    console.log('Son iguales, y de tipos iguales')
}

// Bucles de JavaScript
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(100)

// let i = 0
// i = i + 1; // Esto es lo que hace i++

// Bucle de tipo FOR
for (let i = 0; i <= 100; i++) {
    console.log(i)
}
console.log('Fin del bucle FOR')

// Bucle de tipo WHILE
let x = 0
while (x < 20) {
    console.log('Ciclo WHILE')
    x++
}
console.log('Fin del bucle WHILE')

// Funciones
// let comprobarElMayor
function comprobarElMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else {
        return num3
    }
}

// comprobarElMayor(90, 5, 120)
let mayor = comprobarElMayor(999, 1800, 1)
console.log(comprobarElMayor(100, 10, 50))

let menor = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        return num1
    } else if (num2 < num1 && num2 < num3) {
        return num2
    } else {
        return num3
    }
}
console.log(menor(100, 10, 50))