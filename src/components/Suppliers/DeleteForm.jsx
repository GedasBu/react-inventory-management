import { Modal, Button } from "react-bootstrap";
import { useGlobalContext } from "../../context/SuppliersContext";


const DeleteForm = (props) => {
    const {delModal, deleteSupplierHandler,delSupplierId,handleDelSupplierModal  } = useGlobalContext();
      
 

  return (
    <>
      <Modal show={delModal} 
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
        <Button variant="danger" onClick={()=>{deleteSupplierHandler(delSupplierId)}}>Ištrinti</Button>
          <Button variant="secondary" onClick={()=>{handleDelSupplierModal(false)}} >Atšaukti</Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteForm;