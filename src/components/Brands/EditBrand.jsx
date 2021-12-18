import { Form, Button, Modal } from "react-bootstrap";
import { useState} from "react";

const EditBrand = (props) => {
  const [data, setData] = useState(
    props.editBrandData //Priskiriame is Brands gautus duomenis apie redaguojama irasa
  );
  

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
   

  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.setEditBrand(data);
    // props.hideEditBrand();
   
  };

  return (
    <>
      <Modal show={props.hideEditBrand}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            TP gamintojo redagavimas
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Pavadinimas</Form.Label>
              <Form.Control
                
                type="text"
                name="brand"
                value={data.brand}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit ">
              Atnaujinti
            </Button>{" "}
            <Button variant="danger" onClick={props.hideEditBrand}>
              Atšaukti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditBrand;
