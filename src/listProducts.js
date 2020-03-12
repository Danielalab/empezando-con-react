import React, { useState } from 'react';
import './App.css';
import { getDataProducts } from './controller-firebase';
import ItemProduct from './item-product';


function App() {
  const [ arr, setArr ] = useState(null);

  const onClickCategory = (category) => {
    getDataProducts(category)
      .then(data => {
        setArr(data);
      })
  }

  return (
    <div className="App">
      <button type="button" onClick={() => { onClickCategory('breakfast') }}>Desayuno</button>
      <button type="button" onClick={() => { onClickCategory('menu') }}>Almuerzo</button>
      <button type="button" onClick={() => { onClickCategory('complements') }}>Complementos</button>
      <ul>
        { 
          arr === null ?
            'no hay products' :
            arr.map(objProduct => <ItemProduct />)
        }
      </ul>
    </div>
  );
}

export default App;
