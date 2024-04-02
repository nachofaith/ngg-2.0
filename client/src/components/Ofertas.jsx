import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Producto from './Producto';

function ProductosOferta() {
  return (
    <Container>
    <Row className='text-center'>
        <h2>Productos en Oferta       <Badge bg="warning" text="dark">
        Descuentos
      </Badge></h2>
    </Row>
    
    <Row>
    <Col>     
        <Producto />       
    </Col>
    </Row>

</Container>








  );
}

export default ProductosOferta;