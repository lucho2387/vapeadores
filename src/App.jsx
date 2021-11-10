//Combinacion de codigo js y html (JSX- libreria)
// JSX -> JavaScript Xml

// JSX Y HTML
/* class -> className */
import React from 'react';
import Header from './component/Header/Header';
// import './App.css';

import ItemListContainer from './component/ItemListContainer/ItemListContainer';

//funcion anonima (arrowfunction)
//Otra forma de definir la funcion
const App = () => {
  return (
    <> 
      <Header />
      <ItemListContainer saludo="Bienvenidos" />
    </>
  )
}

export default App;
