import { InputGroup, Button } from "react-bootstrap";

const Filter = () => {
  return (
    <InputGroup>
      <input type="text" placeholder="Filtras..." className="border"></input>
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
