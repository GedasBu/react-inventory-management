import { InputGroup, Button, Form } from "react-bootstrap";
import {useEffect, useState} from "react"

const Filter = (props) => {

const [filterFiledText,setFilterFieldText]=useState("")
const set =(e)=>{
  setFilterFieldText(e.target.value)  
  
}
// Siunciame duomenis i PartsList duombazes uzklausai. 
useEffect(() => {
  props.filterFieldData("a",filterFiledText,props.fltrNumber) 
}, [filterFiledText]);

// Tikrinama ar paspaudtas Enter ir paliedziama funkcija PartsList componenete
const sendInputValue =(ev)=>{
  if(ev.key ==='Enter'){
   props.sentToServer()
  }
 

}
// Mygtuko paglaba isvalome filtra
const resetFilter =()=>{
  setFilterFieldText('')
 
}


  return (    
       <InputGroup>
      <Form.Control
        type="text"
        placeholder="Filtras..."
        className="border"
        value={filterFiledText}
        onChange={set}
        onKeyPress={sendInputValue}
        
      ></Form.Control>
      <Button
        className="border"
        variant="outline-secondary"
         title="Panikinti filtrą"
        size="sm"
        onClick={resetFilter}
      >
        x
      </Button>{" "}
    </InputGroup>
   
   
  );
};

export default Filter;
