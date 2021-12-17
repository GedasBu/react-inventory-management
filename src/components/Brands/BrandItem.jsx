import { Button } from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const BrandItem = (props) => {
  const getDeleteIdHandler = () => {
    
    //Siunciame Id i PartsList
    props.delPartForm(props.id);
  };
  const getEditIdHandler = () => {
    props.editPart(props.id, props.number, props.number2, props.description,props.brand,props.producer);
  };

  return (
    <tr className="align-middle" onDoubleClick={getEditIdHandler}>
      <td>{props.id}</td>
      <td>{props.name}</td>
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

export default BrandItem;
