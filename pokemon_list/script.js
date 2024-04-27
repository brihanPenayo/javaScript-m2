console.log("Empezando con llamandas API")
const miLista = document.getElementById('lista_pokemon');

const miURL = 'https://pokeapi.co/api/v2/pokemon'

let misPokemones = [];

// fetch(miURL)
//     .then(res => res.json())
//     .then(data => misPokemones = data.results);

async function llamarApi() {
    try {
        const res = await fetch(miURL);
        const data = await res.json();

        misPokemones = data.results
        for (let indice in misPokemones) {
            const poke_item = document.createElement('li')
            fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.sprites.other.home.front_default)
                    poke_item.innerHTML = `<img src="${data.sprites.other.home.front_default}">`
                    miLista.appendChild(poke_item)
                })
            // poke_item.innerHTML = `<p style="text-transform: capitalize">Nombre: ${pokemons.name}</p>`
            // console.log(pokemons.url)
        }
    }
    catch (error) {
        console.log(error)
    }
}

llamarApi()




// for (let pokemons of misPokemones) {
//     console.log(pokemons)
// }