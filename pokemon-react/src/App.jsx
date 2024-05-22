import { useEffect, useState } from 'react'
import './App.css'
import { PokemonCard } from './components/PokemonCard/PokemonCard'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  // const [hasClicked, setHasClicked] = useState(false)

  const miURL = 'https://pokeapi.co/api/v2/pokemon'

  // useEffect(() => {
  //  console.log("Llamado desde useEffect")
  // },[hasClicked])
const fetchPokemon = async () => {
    try {
        const res = await fetch(miURL);
        const data = await res.json();
        let misPokemones = data.results
        console.log(misPokemones)
        for (let indice in misPokemones) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${indice}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.sprites.other.home.front_default)
                })
        }
    }
    catch (error) {
        console.log(error)
    }
}

fetchPokemon()

  return (
    <div className='container'>
      <PokemonCard nombre="Pikachu" descripcion="Alguna descripcion desde props"/>
      <PokemonCard />
      {/* <button onClick={() => setHasClicked(!hasClicked)}>CLICK</button> */}
    </div>
  )
}

export default App
