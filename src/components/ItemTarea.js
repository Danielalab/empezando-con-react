import React from 'react';

const ItemTarea = (props) => {
  const obj = props.data;
  return (
    <li>{ obj.tarea }</li>
  )
};

export default ItemTarea;