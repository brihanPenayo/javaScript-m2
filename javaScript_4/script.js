let n1 = 100
let n2 = 450
let n3 = 50

// CONDICIONALES DE JAVASCRIPT
// && AND Y
// || OR O 

if (n1 > n2 && n1 > n3) { // nos faltaria preguntar si n1 es mayor que n3 también
    console.log(n1)
} else if (n2 > n1 && n2 > n3) {
    console.log(n2)
} else {
    console.log(n3)
}

// BUCLES EN JAVASCRIPT
// Bucle FOR
console.log("Inicio del bucle")
for (let i = 0; i <= 100; i++) {
    console.log(i)
}
console.log("Fin del bucle")

// Bucle WHILE
console.log("Inicio del bucle WHILE")
while (n3 < n1) {
    if (n3 % 2 == 0) {
        console.log("Es par", n3)
    }
    console.log(n3)
    n3++;
}
console.log("FIN del bucle WHILE")

// Funciones
// funcion sin parametros
function sinParametros() {
    console.log("Funcion sin parametros")
}

// funcion con parametros
function cualEsElMayor(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(num1)
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2)
    } else {
        console.log(num3)
    }
}

cualEsElMayor(10, 20, 30)
cualEsElMayor(40, 10, 5)
cualEsElMayor(0, 100, 50)


