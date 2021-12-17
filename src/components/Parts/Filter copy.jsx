import { InputGroup, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const Filter = (props) => {
  const [filterFieldText, setFilterFieldText] = useState("");
  const set = (e) => {
    setFilterFieldText(e.target.value);
  };
  // Siunciame duomenis i PartsList duombazes uzklausai.
  useEffect(() => {
    props.filterFieldData(filterFieldText, props.fltrNumber);
  }, [filterFieldText]);

  // Tikrinama ar paspaudtas Enter ir paliedziama funkcija PartsList komponente
  const sendInputValue = (ev) => {
    if (ev.key === "Enter") {
      props.sentToServer();
      
    }
  };
  // Mygtuko paglaba isvalome filtra ir atnaujiname daliu sarasa
  const resetFilter = () => {
    setFilterFieldText("");
    props.partsUpdate(Date.now());
  };

  return (
    <th>
    <InputGroup size="sm">
      <Form.Control
        type="text"
        placeholder="Filtruoti..."
        className="border"
        value={filterFieldText}
        onChange={set}
        onKeyPress={sendInputValue}
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
    </th>
  );
};

export default Filter;
