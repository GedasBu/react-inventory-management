import { Form, Button, InputGroup } from "react-bootstrap";
import Producer from "./Producer";
import {useState, useEffect} from "react";
import axios from "axios"

const Producers = (props) => {
  const [producers, setProducers]=useState([])
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState({producer_name:'' })

  useEffect(() => {
    axios.get(`http://localhost:3003/api/producers`).then((res) => {
      setProducers(res.data.producer);
    });
  }, []);
 



  const showModalHandler = () => {
    (showModal)? setShowModal(false): setShowModal(true)
   
  };
  const setInputValueHandler=(value)=>{
    setInputValue(value)
      props.setProducer(value.producer_name)

  }


  return (
    <>
    {showModal && <Producer producersList={producers} showProducer={showModalHandler} setInputValue={setInputValueHandler}/>}
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Gamintojas..."
          className="border"
          value={inputValue.producer_name}
          readOnly
        
        ></Form.Control>
        <Button
          className="border bg-white"
          variant="outline-secondary"
          title="Pasirinkti gamitnoją"
          // size="sm"
          onClick={showModalHandler}
        >
          +
        </Button>{" "}
      </InputGroup>
    </>
  );
};

export default Producers;
