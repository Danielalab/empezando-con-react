import React, { useState } from 'react';

function FormAddTask( props ) {
  const [ inputValue, setInputValue ] = useState('');
  const onChangeInput = (event) => { setInputValue(event.target.value) }
  return (
    <form>
      <input placeholder='agregar tarea' type='text' onChange={ onChangeInput }></input>
      <button type='submit' onClick={ (event) => {
        event.preventDefault();
        props.agregar({
          text: inputValue,
          fecha: new Date()
        });

      } }>agregar</button>
    </form>
  );
}

export default FormAddTask;