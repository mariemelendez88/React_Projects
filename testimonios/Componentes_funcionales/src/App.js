import './App.css';
import { Testimonio } from './componentes/Testimonio';
import testimoniosData from './datos/TestimonioData';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {testimoniosData.map((testimonio, index) => (
          <Testimonio
            key = {index}
            nombre = {testimonio.nombre}
            pais = {testimonio.pais}
            imagen = {testimonio.imagen}
            cargo = {testimonio.cargo}
            empresa = {testimonio.empresa}
            testimonio = {testimonio.testimonio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;