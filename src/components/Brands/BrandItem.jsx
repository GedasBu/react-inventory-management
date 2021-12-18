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
    <tr className="align-middle px-0" onDoubleClick={getEditIdHandler}>
      <td>{props.id}</td>
      <td>{props.name}</td>
     <td className="text-center ">
   
          <Button variant="primary" size="sm" onClick={getEditIdHandler}>          
            <MdEdit />
          </Button>
       
      </td>
      <td className="text-center ">
       
          <Button variant="danger" size="sm" onClick={DeleteByIdHandler}>
            <MdDeleteForever />
          </Button>
     
      </td>
    </tr>
  );
};

export default BrandItem;
