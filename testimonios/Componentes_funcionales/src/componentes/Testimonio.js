import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props) {
  const testimonioHTML = { __html: props.testimonio };
  return(
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='cargo-testimonio'>
          {props.cargo} at <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio' dangerouslySetInnerHTML={testimonioHTML} />
      </div>
    </div>
  );  
}

//export default Testimonio;