import React from 'react'
import { Pokemon } from '../interfaces';
import PokemonList from '../components/PokemonList';

interface Props {
    pokemons : Pokemon[]
}

function PokemonCollection(props:  Props) {
    const {pokemons} = props
    console.log(pokemons)

    return <section className="collection">
        {pokemons.map((pokemon) =>{
            return (
                <PokemonList key={pokemon.id} 
                name={pokemon.name} 
                id={pokemon.id} 
                type={pokemon.types[0].type.name}
                image={pokemon.sprites.front_default}
                />
            )
        })}
    </section>;
  }

export default PokemonCollection