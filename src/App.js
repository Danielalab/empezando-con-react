import React, { useState } from 'react';
import './App.css';
import FormAddTask from './components/FormAddTask';
import ItemTask from './components/ItemTask';

function App() {
  const [ arrOrder, setArrOrder ] = useState([]);

  const agregarTarea = (objTarea) => {
    const newArr =  arrOrder.concat([ objTarea ]);
    setArrOrder(newArr);
  }

  return (
    <div className="App">
      <FormAddTask agregar={ agregarTarea }/>
      {
        arrOrder.length === 0 ?
         'no hay tareas' :
        <ul>
          { arrOrder.map(el => <ItemTask ></ItemTask>)  }
          
        </ul>
      }
    </div>
  );
}

export default App;