import React, { useState } from 'react';

const Pokemon = (props) => {
  console.log(props);
  return (
    <li> { props.name } </li>
  )
}

/* class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.restar = this.restar.bind(this);
    this.state = {
      numb: 0,
    }
  }

  add() {
    const nuevoValor = this.state.numb + 1;
    this.setState({ numb: nuevoValor });
  }

  restar() {
    const nuevoValor = this.state.numb - 1;
    this.setState({ numb: nuevoValor });
  }

  render() {
    return (
      <div>
        <button onClick={ this.restar }> - </button>
        <p> { this.state.numb } </p>
        <button onClick={ this.add }> + </button>
      </div>
    )
  }
} */

export default Pokemon;