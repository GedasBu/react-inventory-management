import { Form, Button,InputGroup} from "react-bootstrap"

const Producers =()=>{

    return(
        <InputGroup >
      <Form.Control
        type="text"
        placeholder="Gamintojas..."
        className="border"
        // value={filterFieldText}
        // onChange={set}       
        
      ></Form.Control>
      <Button
        className="border bg-white"
        variant="outline-secondary"
        title="Pasirinkti gamitnoją"
        // size="sm"
        // onClick={resetFilter}
      >
        +
      </Button>{" "}
    </InputGroup>
    )
}

export default Producers