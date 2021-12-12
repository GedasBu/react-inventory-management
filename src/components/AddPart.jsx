import { Form, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

export const AddPart = (props) => {
  const [data, setData] = useState({
    part_number: "",
    part_number_1: "",
    description: "",
    brand_name: "",
    producer_name: "",
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
      <Modal show={props.showAddPartForm}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Pridėti prekę
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
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
              <Form.Label>Pavadinimas</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Markė</Form.Label>
              <Form.Control
                type="text"
                name="brand_name"
                value={data.brand_name}
                onChange={handleChange}
              />
              <Form.Label>Gamintojas</Form.Label>
              <Form.Control
                type="text"
                name="producer_name"
                value={data.producer_name}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <br />
            <Button variant="success" type="submit">
              Pridėti
            </Button>{" "}
            <Button variant="danger" onClick={props.hideAddPart}>
              Atšaukti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
