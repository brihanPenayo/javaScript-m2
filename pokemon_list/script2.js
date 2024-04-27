// let Juan = 'ALguna cosa'
// Clase 27 abril
let miArreglo = ['hola', 'string']
let miArreglo2 = [3, 3, 'Hola']

let misAnimales = ['Gato', 'Perro', 'Bufalo']

// console.log("Antes de persona")
// console.log(Persona)
let Persona = {
    nombre: 'Lucas',
    apellido: 'Lezcano',
    edad: 20,
    hijos: ['Tomas', 'Juan', 'Mia'],
    padres: {
        madre: {
            nombre: 'Maria',
            edad: 78,
        },
        padre: {
            nombre: 'Pedro',
            edad: 79,
        }
    },
    mascotas: misAnimales,
    imprimirApellido: function () {
        console.log(`El apellido de ${this.nombre} es: ${this.apellido}`)
    },
    imprimirNombreDeMadre: function () {
        console.log(`La mamá de ${this.nombre} es: ${this.padres.madre.nombre}`)
    }
}

let Persona1 = {
    nombre: 'Pedro',
    imprimirApellido: function () {
        console.log(`El apellido de ${this.nombre} es: ${this.apellido}`)
    }
}

// console.log("Después de persona")
Persona.imprimirApellido()
Persona.imprimirNombreDeMadre()
console.log(Persona.padres.padre.nombre)
// console.log(document.children) // Asi se acceden a las propiedades de un objeto


const miURL = 'https://pokeapi.co/api/v2/pokemon'

fetch(miURL)
    .then(result => result.json())
    .then(data => console.log(data.results[5]));

let miArray = ['pedro', 'Juan', 'Lucas', 'Karen', 'Juana']

console.log(miArray.length)

for (let indice = 0; indice < miArray.length; indice++) {
    console.log(miArray[indice])
}

console.log('fin del for')