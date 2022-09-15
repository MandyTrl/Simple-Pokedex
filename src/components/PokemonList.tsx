import React from 'react'

interface Props {
    name: string,
    id: number,
    image: string,
    type: string
}

function PokemonList(props : Props) {
    const {name, id, image, type} = props

    return(
            <div>
                <section className={`pokemon_list ${type}`}>
                 <p className="id">#{id}</p>
                 <p className="name">{name}</p>
                 <img src={image} alt={name} />
                 <p className="info">Type : {type}</p>
                </section>
            </div>

            );
  }

export default PokemonList