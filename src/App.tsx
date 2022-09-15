import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon } from './interfaces';

interface Pokemons {
  name: string,
  url: string,
} ///Typage 

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]) ///Gestion des pokemons, init: tableau vide, variable de type "Pokemon"
  const [nextUrl, setNextUrl] = useState("") ///Gestion du chargement des prochains Pokemons

  useEffect(() => {
    const getPokemon = async() => {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      // console.log("List of Pokemons : ",result.data.results)

      setNextUrl(result.data.next)

      result.data.results.forEach( async(pokemon: Pokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        // console.log("List of Pokemons : ", poke.data)

        setPokemons((p) => [...p, poke.data])
      })
    }
    getPokemon()
  }, []) ///Appel de l'API PokeApi pour générer les pokemonsà l'init de l'app
  
  const nextPage = async () => {
    let res = await axios.get(nextUrl)

    setNextUrl(res.data.next)

    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      setPokemons((p) => [...p, poke.data])
    })
  }

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon_header">
            Pokedex
        </header>
        <PokemonCollection pokemons={pokemons} />
        <button onClick={nextPage}>Charger</button>
      </div>
    </div>
  );
}

export default App;
