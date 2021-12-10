import { Nav, Row } from "react-bootstrap";

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" >
      <Row className="border border-top-0 border-right-0">
         <Nav.Link href="/home" >Dalys</Nav.Link>
        </Row>
      <Row className="border border-top-0 border-right-0 ">
         <Nav.Link eventKey="link-1">Markė<samp></samp></Nav.Link>
      </Row>
      <Row className="border border-top-0 border-right-0">
      <Nav.Link eventKey="link-2">Tiekėjai</Nav.Link>
      </Row>

      
      <Nav.Link eventKey="link-2">Gamnitojai</Nav.Link>
      <Nav.Link eventKey="link-2">Kainos</Nav.Link>
      <Nav.Link eventKey="link-2">KL Užsakymai</Nav.Link>
      <Nav.Link eventKey="link-2">Tiek Užsakymai</Nav.Link>
    
    </Nav>
  );
};

export default SideNav;
