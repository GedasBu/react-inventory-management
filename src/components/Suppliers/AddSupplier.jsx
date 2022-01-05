import { Form, Button, Modal, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";

const AddSupplier = (props) => {
  const [data, setData] = useState({ producer: "" });
  const [inputText, setInputText] = useState(false);

  const handleChange =(e)=>{
    setData({[e.target.name]: e.target.value})
}

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.producer.trim().length === 0) {
      setInputText(true);
      return;
    }
    props.addProducer(data);
    setData({producer:''})    
  };
  
  const cancelInput =()=>{
    setInputText(false);
     props.hideAddBrand();

}


  return (
    <Modal show={props.showAddProducer}>
      <Modal.Header>
        <Modal.Title>Pridėti gamintoją</Modal.Title>
      </Modal.Header>

      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>
              Pavadinimas{" "}
              {inputText && <span>Laukas negali būti tuščias!!!</span>}
            </Form.Label>
            <Form.Control
              type="text"
              name="producer"
              value={data.producer}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
        
          <Button variant="success" type="submit">
            Pridėti
          </Button>{" "}
          <Button variant="danger" onClick={cancelInput}>
            Atšaukti
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddSupplier;