import './App.css';
import Header from './Header';
import Resultados from './Resultados';
import Errores from './Errores';
import { useState } from 'react';
import { mock1 } from './constants/mock.js';
import CONFIG from './config/config.js';

function App() {
  const [latitud, setLatitud] = useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);
  const [resultado, setResultado] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const callServer = async () => {
    let lat = latitud;
    let lon = longitud;
    const appid = CONFIG.api_key;
    
    try {
      if (CONFIG.use_server) {
        let queryparams = `?lat=${lat}&lon=${lon}&appid=${appid}`;
        const response = await fetch(`${CONFIG.server_url}${queryparams}`);

        if (response.status === 200) {
          console.log("Codigo 200");
          const data = await response.json();
          setResultado(data);
        } else {
          const errorData = await response.json();
          setErrorMessage(`Descripción: Obtenido error al llamar al API. Código: ${errorData.cod}\nMensaje del servidor: ${errorData.message}`);
        }
      } else {
        console.log("Resultados locales");
        setResultado(mock1);
      }
    } catch (error) {
      setErrorMessage('Error al procesar la solicitud');
    }
  }

  return (
    <div id="main">
      <Header />
      <h2 id="titulo">El tiempo</h2>
      <label>Latitud: <input type="Number" id="latitud" value={latitud} onChange={(e) => setLatitud(e.target.value)} 
        placeholder={CONFIG.default_lat} /></label>
      <br/>
      <label>Longitud: <input type="Number" id="longitud" value={longitud} onChange={(e) => setLongitud(e.target.value)} 
        placeholder={CONFIG.default_lon} /></label>
      <br/>
      <br/>
      <button id="buscar" onClick={()=>callServer()} >Buscar</button>
      <br/>
      <br/>
      {errorMessage && <Errores errorData={errorMessage}/>}
      {resultado && <Resultados numitems={CONFIG.num_items} items={resultado}/>}
    </div>
  );
}

export default App;
