import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NoMatch = () => {
  return (
    <div>
        <br/>
        <h1 id="info">Ruta no encontrada</h1>
        <br/>
        <Button><Link to="/" className='text-white'>Volver</Link></Button>
    </div>
  );
};

export default NoMatch;
