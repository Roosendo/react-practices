import './App.css';
import { useState } from 'react';
import Boton from './components/Boton';
import Contador from './components/Contador';
import spotifyLogo from './imgs/spotify.png';

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='spotify-logo-contenedor'>
        <img
          className='spotify-logo'
          src={spotifyLogo}
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-main'>
        <Contador
          numClicks={numClicks} />
        <Boton 
          text='Click!'
          esBotonClick={true}
          manejarClick={manejarClick} />
        <Boton
          text='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
