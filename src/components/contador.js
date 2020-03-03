import React, { useState } from 'react';

const Contador = () => {
  const [state, setstate] = useState(0);

  const add = () => {
    const nuevoValor = state + 1;
    setstate(nuevoValor);
  }

  const restar = () => {
    const nuevoValor = state - 1;
    setstate(nuevoValor);
  }
  return (
    <div>
        <button onClick={ restar }> - </button>
        <p> { state } </p>
        <button onClick={ add }> + </button>
      </div>
  )
}

/* class Contador extends React.Component {
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

export default Contador;