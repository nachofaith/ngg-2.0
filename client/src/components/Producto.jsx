import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Producto(){
    return(

<Card style={{ width: '18rem' }} className='text-center text-uppercase'>
    <Card.Header className='fw-light fs-4'><Badge bg="secondary">AUDIFONOS</Badge> <Badge bg="primary">HYPERX</Badge></Card.Header>
      <Card.Img variant="top" src="https://i0.wp.com/tienda.ngg.cl/wp-content/uploads/2023/12/FRONT.png?fit=600%2C600&ssl=1" />
      
      <Card.Body>
        
        <Card.Title className='fs-4 fw-light'>Audifonos Astro A50 </Card.Title>
        <Card.Text>
        
        <Badge pill bg="success">Oferta</Badge>
        <h4><del className='fw-light fs-5' >$54.990</del> $50.990</h4>

        </Card.Text>
      </Card.Body>
     
      <Card.Body>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Comprar Ahora
      </Button>
      <Button variant="primary" size="lg">
        Agregar al Carro
      </Button>
    </div>
      </Card.Body>
</Card>

    );

}


export default Producto;