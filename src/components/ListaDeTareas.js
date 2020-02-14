import React from 'react';
import ItemTarea from './ItemTarea';


const ListaDeTareas = (props) => {
  const tareas = props.tareas;
  return (
    <ul>
      { 
        tareas.map((objTarea, index) => <ItemTarea key={ index } data={ objTarea }/>)
      }
    </ul>
  )
};

export default ListaDeTareas;