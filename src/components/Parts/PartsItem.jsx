import { Button } from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const PartsItem = (props) => {
  const getDeleteIdHandler = () => {
    
    //Siunciame Id i PartsList
    props.delPartForm(props.id);
  };
  const getEditIdHandler = () => {
    props.editPart(props.id, props.number, props.number2, props.description,props.brand,props.producer);
  };

  return (
    <tr className="align-middle " onDoubleClick={getEditIdHandler}>
      <td>{props.id}</td>
      <td>{props.number}</td>
      <td>{props.number2}</td>
      <td>{props.description}</td>
      <td>{props.brand}</td>
      <td>{props.producer}</td>
      <td className="text-center">
        <a href="#/" onClick={getEditIdHandler} >
          <Button variant="primary">          
            <MdEdit />
          </Button>
        </a>
      </td>
      <td className="text-center">
        <a href="#/" onClick={getDeleteIdHandler}>
          <Button variant="danger">
            <MdDeleteForever />
          </Button>
        </a>
      </td>
    </tr>
  );
};

export default PartsItem;
