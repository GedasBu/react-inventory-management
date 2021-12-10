import { InputGroup, Button, Form } from "react-bootstrap";
import {useState} from "react"

const Filter = () => {
  

 
  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Filtras..."
        className="border"
        
      ></Form.Control>
      <Button
        className="border"
        variant="outline-secondary"
         title="Panikinti filtrą"
        size="sm"
      >
        x
      </Button>{" "}
    </InputGroup>
  );
};

export default Filter;
