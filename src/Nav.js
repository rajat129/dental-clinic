
import * as Reactbootstrap from "../node_modules/react-bootstrap/dist/react-bootstrap.min.js";

const Nav = () => {
    return(
        <Reactbootstrap.Navbar bg="dark" expand="lg" variant="dark">
  <Reactbootstrap.Navbar.Brand href="#home">Dental clinic</Reactbootstrap.Navbar.Brand>
  <Reactbootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Reactbootstrap.Navbar.Collapse id="basic-navbar-nav">
    <Reactbootstrap.Nav className="mr-auto">
      <Reactbootstrap.Nav.Link href="#home">Home</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#link">About us</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#home">Services</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#link">Vedios</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#home">Photos</Reactbootstrap.Nav.Link>
      <Reactbootstrap.Nav.Link href="#link">Contact us</Reactbootstrap.Nav.Link>
    </Reactbootstrap.Nav>
    
  </Reactbootstrap.Navbar.Collapse>
</Reactbootstrap.Navbar>

    );
}

export default Nav;