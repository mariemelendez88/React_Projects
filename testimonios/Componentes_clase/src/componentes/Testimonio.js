import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

class Testimonio extends React.Component {
  render() {
    return (
      <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${this.props.imagen}.png`)}
          alt={`Foto de ${this.props.nombre}`}
        />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{this.props.nombre}</strong> in {this.props.pais}
          </p>
          <p className='cargo-testimonio'>
            {this.props.cargo} at <strong>{this.props.empresa}</strong>
          </p>
          <p className='texto-testimonio' dangerouslySetInnerHTML={{ __html: this.props.testimonio }} />
        </div>
      </div>
    );
  }
}

export { Testimonio };
