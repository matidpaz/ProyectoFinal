import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Container, Nav, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'

export default function Header(){
    const navigate= useNavigate();
    const isAuth=localStorage.getItem('auth')==='true';

    const cerrarSesion=()=>{
        localStorage.removeItem('auth');
        navigate('/login');
    }

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">Una tiendita sensilla
                   
                        <img
                            src="https://placehold.coñ/40"
                            alt="Logo"
                            className='d-inline-block align-top me-2'
                            />
                        <span></span>

                </Navbar.Brand>

                <Nav className='ms-auto align-items-center'>
                    <Nav.Link as={Link} to="/" className='me-3'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className='me-3'>Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/infaltables" className='me-3'>Infaltables</Nav.Link>

                    <div className='d-flex align-items-center'>
                        <Button variant='outline-light' as={Link} to="/administracion" className='me-2'>
                            Administracion
                        </Button>
                        <Link to="/carrito" className='text-white'>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
                        </Link>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    )
};

