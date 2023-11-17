import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/cartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav>

                    <Navbar.Brand as={Link} to="/"> Todo Musica</Navbar.Brand>
                    <Nav.Link as={Link} to="/category/guitarras">Guitarras</Nav.Link>
                    <Nav.Link as={Link} to="/category/teclados">Teclados</Nav.Link>
                    <Nav.Link as={Link} to="/category/baterias">Baterias</Nav.Link>
                    <Nav.Link as={Link} to="/category/micros">Micros</Nav.Link>
                    
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar