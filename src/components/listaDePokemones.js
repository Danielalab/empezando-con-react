import React, { useState } from 'react';
import Pokemon from './pokemon';

/* const ListaDePokemones = () => {
  const arrDePokemones = [
    { name: 'Pikachu' },
    { name: 'Charmander' },
    { name: 'Bulbasor' },
    { name: 'Squirtle' },
  ];

  return (
    <ul>
      { 
        arrDePokemones.map(
          dataDePokemon => <Pokemon name={ dataDePokemon.name } />
        )
      }
    </ul>
  )
} */

class ListaDePokemones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemones: [
        { name: 'Pikachu' },
        { name: 'Charmander' },
        { name: 'Bulbasor' },
        { name: 'Squirtle' },
      ],
    }
  }

  render() {
    return (
      <ul>
      { 
        this.state.pokemones.map(dataDePokemon => <Pokemon key={ dataDePokemon.name } name={ dataDePokemon.name } />)
      }
    </ul>
    )
  }
}

export default ListaDePokemones;