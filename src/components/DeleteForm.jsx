import { Modal, Button } from "react-bootstrap";
import {useState} from "react"

const DeleteForm = (props) => {
 

  return (
    <>
      <Modal show={props.show} 
      backdrop="static"
       keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Irašo šalinimas</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ar tikrai norite ištrinti?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.delModalClose} >Uždaryti</Button>
          <Button variant="danger" onClick={props.delPartFromServer}>Ištrinti</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteForm;
