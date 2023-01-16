import React from 'react' ;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarr = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">ciné</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">movies</Nav.Link>
        <Nav.Link href="#features">séries</Nav.Link>
        <Nav.Link href="#pricing">anime</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbarr
