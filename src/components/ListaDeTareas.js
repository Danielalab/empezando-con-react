import React from 'react';
import ItemTarea from './ItemTarea';


const ListaDeTareas = (props) => {
  const tareas = props.tareas;
  return (
    <ul data-testid="lista">
      { 
        tareas.map((objTarea, index) => <ItemTarea key={ index } data={ objTarea }/>)
      }
    </ul>
  )
};

export default ListaDeTareas;