import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormAgregarTarea from '../components/FormAgregarTarea.js';
import { act } from 'react-dom/test-utils';

it('Deberia limpiar el input al dar click al button', () => {
  // creando prop 

  // renderizando el componente
  const { getByText, getByPlaceholderText } = render(
    <FormAgregarTarea agregarTarea={ (data) => { console.log(data) } }/>
  );

  // obteniendo el input por su placeholder
  const input = getByPlaceholderText('agrega una tarea');

  // obteniendo el button por su texto
  const button = getByText('Agregar');
  
  // valor del input al renderizar el componente
  expect(input.value).toBe('');

  // asignando valor al input
  act(() => {
    fireEvent.change(input, { target: { value: 'hacer los tests' } })
  })

  // verificando que el valor del input fur modificado
  expect(input.value).toBe('hacer los tests');

  // disparando el evento de click del button
  act(() => {
    fireEvent.click(button);
  })
  
  // despues de dar click al button
  expect(input.value).toBe('');
});
