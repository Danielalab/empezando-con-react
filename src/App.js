import React, { useState } from 'react';
import './App.css';
import FormAgregarTarea from './components/FormAgregarTarea';
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  const [arrDeTareas, setArrDeTareas] = useState([]);

  const agregarTarea = (obj) => {
    const newArr = [ ...arrDeTareas, obj ];
    setArrDeTareas(newArr);
  };

  return (
    <div className="App">
      <FormAgregarTarea agregarTarea={ agregarTarea }/>
      <ListaDeTareas tareas={ arrDeTareas }/>
    </div>
  );
}

export default App;
