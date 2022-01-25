import { Form, Button, Modal } from "react-bootstrap";
import { useGlobalContext } from "../../context/SuppliersContext";
import { useState, useEffect } from "react";

const EditSupplier = (props) => {
  const {
    supplierEditForm,
    handleEditSupplierForm,
    supplierEditData,
    editSupplierHandler,
  } = useGlobalContext();

  const [data, setData] = useState();

  useEffect(() => {
    setData(supplierEditData);
  }, [supplierEditData]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("data", data);
    // editSupplierHandler(data);
    handleEditSupplierForm(false, {});
  };

  return (
    <Modal show={supplierEditForm}>
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
              name="name"
              value={data?.name || ""}
              onChange={handleChange}
            />
            <Form.Label>Šalis</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={data?.country || ""}
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" type="submit ">
            Atnaujinti
          </Button>{" "}
          <Button
            variant="danger"
            onClick={() => {
              handleEditSupplierForm(false, {});
            }}
          >
            Atšaukti
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditSupplier;
