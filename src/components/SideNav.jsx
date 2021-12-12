import { Nav, Row } from "react-bootstrap";

const SideNav = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column ">
      <Row className="border-bottom ">
        <Nav.Link href="/home" className="text-dark hover">Dalys</Nav.Link>
      </Row>
      <Row className="border-bottom ">
        <Nav.Link eventKey="link-1" className="text-dark">
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
