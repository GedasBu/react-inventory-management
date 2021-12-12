import { Form, Card, Row, Col, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const EditPart = (props) => {
  const [data, setData] = useState(
    props.editPartData //Priskiriame is PartsList gautus duomins apie redaguojama detale
  );

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.updatePartData(data);
    props.hideEditPart();
  };

  return (
    <>
      <Modal show={props.showEditForm}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Redaguoti prekę
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
            <Button variant="success" type="submit ">
              Atnaujinti
            </Button>{" "}
            <Button variant="danger" onClick={props.hideEditPart}>
              Atšaukti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      
    </>
  );
};

export default EditPart;
