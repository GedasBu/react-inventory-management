import { Nav, Row } from "react-bootstrap";
import {Link} from "react-router-dom"

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Row className="border-bottom ">
        <Nav.Link href="/parts" className="text-dark hover" to="/parts">Dalys</Nav.Link>
      </Row>
      <Row className="border-bottom ">
        <Nav.Link href="/brands" eventKey="/brands" className="text-dark" to="/brands">
          Markės
        </Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">Tiekėjai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">Gamnitojai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">Kainos</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">Klientai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">KL Užsakymai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2" className="text-dark">TK Užsakymai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2"className="text-dark">...</Nav.Link>
      </Row>
    </Nav>
  );
};

export default SideNav;
