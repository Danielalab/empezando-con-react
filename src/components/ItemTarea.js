import React from 'react';

const ItemTarea = (props) => {
  const obj = props.data;
  return (
    <li data-testid="item">{ obj.tarea }</li>
  )
};

export default ItemTarea;