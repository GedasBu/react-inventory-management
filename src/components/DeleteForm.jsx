import { Modal, Button } from "react-bootstrap";
import {useState} from "react"

const DeleteForm = (props) => {
 

  return (
    <>
      <Modal show={props.show} 
      // backdrop="static"
       keyboard={false}
       centered
       size="sm"
      >
        <Modal.Header>
          <Modal.Title>Irašo šalinimas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ar tikrai norite ištrinti?</Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={props.delPartFromServer}>Ištrinti</Button>
          <Button variant="secondary" onClick={props.delModalClose} >Atšaukti</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteForm;
