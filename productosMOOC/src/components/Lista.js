import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Lista(props) {
  const { productosFiltrados, numItems } = props;
  const productosFiltrados2 = productosFiltrados.slice(0, numItems);

  return (
    <div id="productosresultados">
      <Row>
        {productosFiltrados2.map((producto, index) => (
          <Col key={producto.id} sm={3} className="mb-4">
            <Card className="bg-dark text-white">
              <Card.Img 
                variant="top" 
                src={producto.thumbnail} 
                alt={producto.title}
                className="imagen" />
              <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>{producto.description.substring(0, 20)}</Card.Text>
                <Button id={`ver-${index}`}>
                  <Link to={`/products/${index}`} className='text-white'>Ver</Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
