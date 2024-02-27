import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Location from './Location'; // Importa el componente Location
import { Card, Button } from 'react-bootstrap';

export default function Producto(props) {
  const { productosFiltrados } = props;
  const { productId } = useParams();
  const parsedProductId = parseInt(productId);
  const producto = productosFiltrados.find((prod, index) => index === parsedProductId);

  if (!producto) {
    return(
      <div>
        <br/>
        <h1 id="info">No se encontró el producto.</h1>
        <br/>
        <Button>
          <Link to="/" className='text-white'>Volver</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <br/>
      <Location />
      <div className="container mt-4">
        <div className="row">
          <div className="card col-sm-6">
            <div className="card-body">
              <Card.Img 
                variant="top" 
                src={producto.thumbnail} 
                alt={producto.title}
                className="imagen rounded border-light " />
            </div>
          </div>
          <div className="card col-sm-6">
            <div className="card-body">
            <Card.Body>
                <Card.Title className="bg-warning der">{producto.title}</Card.Title>
                <Card.Text className="izq">Descripción: {producto.description}</Card.Text>
                <Card.Text className="izq">Price: {producto.price}</Card.Text>
                <Card.Text className="izq">Rating: {producto.rating}</Card.Text>
                <Card.Text className="izq">Stock: {producto.stock}</Card.Text>
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
      <Button id="volver"><Link to="/" className='text-white'>Volver</Link></Button>
    </div>
  );
}