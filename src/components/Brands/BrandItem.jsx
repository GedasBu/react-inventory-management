import { Button } from "react-bootstrap";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const BrandItem = (props) => {
  const DeleteByIdHandler = (id) => {   
    //Siunciame Id i Brands 
     props.delBrandForm(props.id)

  };

  const getEditIdHandler = () => {   
    props.showEditBrand(props.id, props.name);
  };

  return (
    <tr className="align-middle" onDoubleClick={getEditIdHandler}>
      <td>{props.id}</td>
      <td>{props.name}</td>
     <td className="text-center ">
        <a href="#/" onClick={getEditIdHandler} >
          <Button variant="primary">          
            <MdEdit />
          </Button>
        </a>
      </td>
      <td className="text-center">
        <a href="#/" onClick={DeleteByIdHandler} >
          <Button variant="danger">
            <MdDeleteForever />
          </Button>
        </a>
      </td>
    </tr>
  );
};

export default BrandItem;
