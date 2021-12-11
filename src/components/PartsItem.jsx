import { Button } from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const PartsItem = (props) => {
  const getDeleteIdHandler = () => {
    
    //Siunciame Id i PartsList
    props.delPartForm(props.id);
  };
  const getEditIdHandler = () => {
    props.editPart(props.id, props.number, props.number2, props.description);
  };

  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.number}</td>
      <td>{props.number2}</td>
      <td>{props.description}</td>
      <td>{props.brand}</td>
      <td>{props.supplier}</td>
      <td>
        <a href="#/" onClick={getEditIdHandler}>
          <Button variant="primary">
            {" "}
            <MdEdit />
          </Button>
        </a>
      </td>
      <td>
        <a href="#/" onClick={getDeleteIdHandler}>
          <Button variant="danger">
            <MdDeleteForever />{" "}
          </Button>
        </a>
      </td>
    </tr>
  );
};

export default PartsItem;
