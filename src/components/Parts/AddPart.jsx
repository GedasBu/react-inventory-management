import { Form, Button, Modal, Row, Col, InputGroup, FormGroup } from "react-bootstrap";
import { useState } from "react";
import Brands from "./Brands";
import Producers from "./Producers";
import { useGlobalContext } from "../../context/PartsContext";

export const AddPart = (props) => {
  const { parts, partsAddForm, handleAddPartForm } = useGlobalContext();

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
  const setProducerHandler = (producer) => {
    setData({ ...data, producer_name: producer })

  }
  const setBrandHandler = (brand) => {
    setData({ ...data, brand_name: brand })
  }
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      data.part_number.trim().length === 0 ||
      data.description.trim().length === 0 ||
      data.producer_name.trim().length === 0
    ) {

      return;
    }

    props.newPart(data);
    handleAddPartForm(false)
   

  };

  return (
    <>
      <Modal show={props.show} onHide={props.hideAddPart}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Pridėti prekę
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Numeris*</Form.Label>
              <Form.Control
                type="text"
                name="part_number"
                value={data.part_number}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Numeris2</Form.Label>
              <Form.Control
                type="text"
                name="part_number_1"
                value={data.part_number_1}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pavadinimas*</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Row>
              <Col md>
                <Form.Group>
                  <Form.Label >Markė</Form.Label>
                  {/* <Form.Select
                    name="brand_name"                 
                    value={data.brand_name}
                    onChange={handleChange}
                  >
                    <Brands />
                  </Form.Select> */}

                  <Form.Control
                    type="list"
                    placeholder="Markė"
                    name="brand_name"
                    value={data.brand_name}
                    onChange={handleChange}
                    list="brand_name"
                    autocomplete='off' >
                  </Form.Control>
                  <Brands />
                </Form.Group>
              </Col>
              <Col md>

                {/* <Form.Label>Gamintojas*</Form.Label>
                  <Producers setProducer={setProducerHandler} /> */}

                <FormGroup>                  
                    <Form.Label>Gamintojas*</Form.Label>
                    <InputGroup>
                    <Form.Control
                      type="data-list"
                      placeholder="Gamintojas"
                      name="producer_name"
                      value={data.producer_name}
                      onChange={handleChange}
                      list="producer_name"
                      autocomplete='on' >
                    </Form.Control>
                    <Button
                      className="border bg-white"
                      variant="outline-secondary"
                      title="Pasirinkti gamitnoją"
                     >
                      +
                    </Button>{" "}
                    </InputGroup>
                    <Producers />                  
                </FormGroup>






              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <br />
            <Button variant="success" type="submit">
              Pridėti
            </Button>{" "}
            <Button variant="danger" onClick={() => { handleAddPartForm(false) }}>
              Atšaukti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
