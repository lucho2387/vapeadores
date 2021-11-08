//Combinacion de codigo js y html (JSX- libreria)
// JSX -> JavaScript Xml

// JSX Y HTML
/* class -> className */
import React from 'react';
import Header from './component/Header/Header';
// import './App.css';

//funcion anonima (arrowfunction)
//Otra forma de definir la funcion
const App = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  )
}

export default App;
