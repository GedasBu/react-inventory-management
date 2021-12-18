import {Form, Modal, Button} from "react-bootstrap"
import {useState} from "react"

const AddBrand = (props) => {
    const [data,setData]=useState({brand:''})
    const [inputText, setInputText] = useState(false)

    const handleChange =(e)=>{
        setData({[e.target.name]: e.target.value})
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        console.log(data.brand.length)
        if(data.brand.trim().length === 0) {
            setInputText(true) 
            return; 
        } 
       
        props.addBrand(data)
        props.hideAddBrand()
       

    }
    const cancelInput =()=>{
        setInputText(false);
         props.hideAddBrand();

    }

  return (
    <>
      <Modal show={props.showAddBrand}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Pridėti TP gamintoją
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Pavadinimas {(inputText) && <span>Laukas negali būti tuščias!!!</span>}</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={data.brand}
                onChange={handleChange}
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
          
            <Button variant="success" type="submit">
              Pridėti
            </Button>{" "}
            <Button variant="danger" onClick={cancelInput} >
              Atšaukti
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddBrand;
