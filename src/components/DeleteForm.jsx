import { Modal, Button } from "react-bootstrap";
import {useState} from "react"

const DeleteForm = (props) => {

 
  return (
    <>
      <Modal show={props.show} 
        // onHide={props.show}
       backdrop="static"
       keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.delModalClose} >Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteForm;
