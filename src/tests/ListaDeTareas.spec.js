import React from 'react';
import { render, getNodeText } from '@testing-library/react';
import ListaDeTareas from '../components/ListaDeTareas';


describe ('ListadeTareas', () => {

  it('Deberia mostrar 4 tareas en una lista', () => {
    const tareas = [{
      tarea: 'hola',
    },
    {
      tarea: 'que tal',
    },
    {
      tarea: 'cool',
    },
    {
      tarea: 'ojala me salga',
    }]
    const container = render (<ListaDeTareas tareas={tareas} />);
    const listaDeNodos = container.getAllByTestId('item');
    
    expect(listaDeNodos.length).toBe(4);
    expect(getNodeText(listaDeNodos[0])).toBe('hola');
    expect(getNodeText(listaDeNodos[3])).toBe('ojala me salga');
  })
})
