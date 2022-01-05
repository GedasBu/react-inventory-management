import { Form, Button, Modal, Row, Col, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useGlobalContext } from "../../context/SuppliersContext";

const AddSupplier = () => {

    const { supplierAddForm, handleAddSupplierForm, addSupplierHandler } = useGlobalContext();
    const [data, setData] = useState({name:'', country:'', comment:''});
    const [inputText, setInputText] = useState(false);
   

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (data.name.trim().length === 0) {
            setInputText(true);
            return;
        }
        if (data.country.trim().length === 0) {
            setInputText(true);
            return;
        }    
        addSupplierHandler(data)

        handleAddSupplierForm(false)
        setData({name:'', country:'', comment:''})
       }; 


    return (
        <Modal show={supplierAddForm}>
            <Modal.Header>
                <Modal.Title>Pridėti tiėkėją</Modal.Title>
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
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />

                        <Form.Label>
                            Šalis{" "}
                            {inputText && <span> negali būti tuščias!!!</span>}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="country"
                            value={data.country}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" type="submit">
                        Pridėti
                    </Button>{" "}
                    <Button variant="danger" onClick={() => { handleAddSupplierForm(false) }}>
                        Atšaukti
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default AddSupplier;