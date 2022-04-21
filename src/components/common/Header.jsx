import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/customers"> Customers</Nav.Link>
            <Nav.Link  as={Link} to="/reservations"> Reservations</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
