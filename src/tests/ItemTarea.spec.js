import React from 'react';
import { render, getNodeText, getByTestId } from '@testing-library/react';
import ItemTarea from '../components/ItemTarea';

describe('ItemTarea', () => {
  it('Deberia mostrar la tarea con el texto Hola', () => {
    const data = { tarea: 'Hola' };
    const container = render(<ItemTarea data={ data }/>);
    const liElem = container.getByTestId('item');

    const text = getNodeText(liElem);

    expect(text).toBe('Hola');

  });
  
});


