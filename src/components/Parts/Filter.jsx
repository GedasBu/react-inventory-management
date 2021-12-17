import { InputGroup, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Filter = (props) => {
  const filterFieldValue = useRef();

  
  const [filterFieldText, setFilterFieldText] = useState("");
  const set = (e) => {
    setFilterFieldText(e.target.value);
  };
  // Siunciame duomenis i PartsList duombazes uzklausai.
  // useEffect(() => {
  //   props.filterFieldData(filterFieldText, props.fltrNumber);
  // }, [filterFieldText]);


  // Tikrinama ar paspaudtas Enter ir paliedziama funkcija PartsList komponente
  const sendInputValue = (ev) => {
    // const filter = filterFieldValue.current.value
    // if (ev.key === "Enter") {
    //   props.filterFieldData(filter, props.fltrNumber)
    //   props.sentToServer();
    //   console.log('ref',filterFieldValue.current.value);
      
    // }
  };
  const siusk =(e)=>{
    e.preventDefault();
    props.filterFieldData(filterFieldValue.current.value, props.fltrNumber)
    props.sentToServer();

  }
  // Mygtuko paglaba isvalome filtra ir atnaujiname daliu sarasa
  const resetFilter = () => {
    setFilterFieldText("");
    props.partsUpdate(Date.now());
  };
 

  return (
    <th>
      <Form onSubmit={siusk}>     
    <InputGroup size="sm">
      <Form.Control
        type="text"
        placeholder="Filtruoti..."
        className="border"
        // value={filterFieldText}
        // onChange={set}
        onKeyPress={sendInputValue}
        ref={filterFieldValue}
      ></Form.Control>
      <Button
        className="border bg-white"
        variant="outline-secondary"
        title="Panikinti filtrą"
        size="sm"
        onClick={resetFilter}
      >
        x
      </Button>{" "}
    </InputGroup>
     </Form>
    </th>
  );
};

export default Filter;
