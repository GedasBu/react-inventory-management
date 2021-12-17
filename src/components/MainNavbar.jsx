import { Navbar} from "react-bootstrap";

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" >     
        <Navbar.Brand className="navbarbrand" href="#home">React Order & Stock Management...</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end navbarSign">
          <Navbar.Text >
            Vartotojas: <a href="#login">Gediminas</a>
          </Navbar.Text>
        </Navbar.Collapse>
     
    </Navbar>
  );
};

export default MainNavbar;
