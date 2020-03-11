import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import FormAgregarTarea from '../components/FormAgregarTarea';
// import { act } from 'react-dom/test-utils';

describe('FormAgregarTarea', () => {
  
  it('Deberia de limpiar el input al dar click al button', () => {
    const agregarTarea = jest.fn();
    const container = render(<FormAgregarTarea agregarTarea={ agregarTarea }/>);
    const input = container.getByPlaceholderText('agrega una tarea');
    const button = container.getByText('Agregar');

    // cuando se pinta por primera vez
    expect(input.value).toBe('');

    // cambiar el valor del input
    act(() => {
      fireEvent.change(input, { target: { value: 'hola' } });
    })

    // verifica cambio del input
    expect(input.value).toBe('hola');

    // dar click al boton
    act(() => {
      fireEvent.click(button);
    })
    
    // verifica input despues de dar click
    expect(input.value).toBe('');
    expect(agregarTarea.calls.length).toBe(1)
  });
  

});




