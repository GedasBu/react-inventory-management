import { Nav, Row } from "react-bootstrap";

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Row className="border-bottom">
        <Nav.Link href="/home">Dalys</Nav.Link>
      </Row>
      <Row className="border-bottom ">
        <Nav.Link eventKey="link-1">
          Markės
        </Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">Tiekėjai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">Gamnitojai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">Kainos</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">Klientai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">KL Užsakymai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">TK Užsakymai</Nav.Link>
      </Row>
      <Row className="border-bottom">
        <Nav.Link eventKey="link-2">...</Nav.Link>
      </Row>
    </Nav>
  );
};

export default SideNav;
