import React, { useState } from 'react';

const FormAgregarTarea = (props) => {
  const [text, setText] = useState('');

  const onChangeEvent = (event) => {
    const valor = event.target.value;
    setText(valor);
  }

  const onClickButton = (event) => {
    event.preventDefault();
    const objTarea = {
      tarea: text,
      fecha: new Date()
    };
    props.agregarTarea(objTarea);
    setText('');
    // console.log(objTarea);
  }

  return (
    <form>
      <input placeholder='agrega una tarea'
        onChange={ onChangeEvent }
        value={ text }
      >
      </input>
      <button type='submit'
        onClick={ onClickButton }>Agregar</button>
    </form>
  )
};

export default FormAgregarTarea;
