import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login enviado');
    }

    return(
        <Container className='d-flex juntify-content-center align-items-center min-vh-100'>
            <Row className='w-100 justify-content-center'>
                <Col md={6} lg={4}>
                    <Card className='shadow-lg p-4'>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Iniciar Sesion</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className='mb-3' controlId='formUserName'>
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placehonder="Ingrese su Usuario" required/>
                                </Form.Group>

                                <Form.Group className='mb-3' controlId='formPassword'>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placehonder="Ingrese su Constraseña" required/>
                                </Form.Group>

                                <Button variant="primary" type="submit" className='w-100'>
                                    Ingresar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Login;