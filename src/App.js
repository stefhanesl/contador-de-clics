import logo from './img/logo.png';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import React, { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0) 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">

        <div className="logo-contenedor">
          <h1>Contador de clics por </h1>
          <img
            className="logo-imagen"
            src={ logo }
            alt='logo' />
        </div>
        <div className="contenedor-principal">
          <Contador numClics={numClics}/>
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic} />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
          
        </div>
    </div>
  );
}

export default App;
