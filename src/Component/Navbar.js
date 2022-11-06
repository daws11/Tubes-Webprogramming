import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">New Shantika</Navbar.Brand>
          <Nav className="me-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Tiket">Tiket</Nav.Link>
            <Nav.Link href="#Tiket">Jadwal</Nav.Link>
            <Nav.Link href="#features">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;