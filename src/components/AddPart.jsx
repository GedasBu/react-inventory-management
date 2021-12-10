import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export const AddPart = (props) => {
  const [data, setData] = useState({
    part_number: "",
    part_number_1: "",
    description: "",
    main_producer_id: "",
    supplier_id: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.newPart(data);
    props.hideAddPart();
  };

  return (
    <>
      <Card>
        <Card.Header>Nauja prekė</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group>
              <Form.Label>Numeris</Form.Label>
              <Form.Control
                type="text"
                name="part_number"
                value={data.part_number}
                onChange={handleChange}
              />

              <Form.Label>Numeris2</Form.Label>
              <Form.Control
                type="text"
                name="part_number_1"
                value={data.part_number_1}
                onChange={handleChange}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Pavadinimas</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label>Markė</Form.Label>
              <Form.Control
                type="text"
                name="main_producer_id"
                value={data.main_producer_id}
                onChange={handleChange}
              />
              <br />
            </Form.Group>
            <Form.Group>
              <Form.Label>Markė</Form.Label>
              <Form.Control
                type="text"
                name="supplier_id"
                value={data.supplier_id}
                onChange={handleChange}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <br />
              <Button variant="primary" type="submit">
                Saugoti
              </Button>{" "}
              <Button variant="danger" onClick={props.hideAddPart}>
                Atšaukti
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
