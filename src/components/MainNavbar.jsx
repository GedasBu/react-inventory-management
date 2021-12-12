import { Navbar, Container } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" >     
        <Navbar.Brand className="navbarbrand" href="#home">React Order Management...</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end navbarSign">
          <Navbar.Text >
            Signed in as: <a href="#login">Gediminas</a>
          </Navbar.Text>
        </Navbar.Collapse>
     
    </Navbar>
  );
};

export default MainNavbar;
