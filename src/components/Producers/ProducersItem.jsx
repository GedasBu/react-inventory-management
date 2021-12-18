import {Button} from "react-bootstrap"
import { MdDeleteForever, MdEdit } from "react-icons/md";
const ProducerItem = (props) => {
  
    const getEditIdHandler=()=>{

    }

    const DeleteByIdHandler=()=>{

    }

  return (
    <tr className="align-middle px-0">
      <td>{props.id}</td>
      <td>{props.producer}</td>
      <td className="text-center ">
       
          <Button variant="primary" size="sm" onClick={getEditIdHandler} >
            <MdEdit />
          </Button>
   
      </td>
      <td className="text-center ">
       
          <Button variant="danger" size="sm" onClick={DeleteByIdHandler} >
            <MdDeleteForever />
          </Button>
        
      </td>
    </tr>
  );
};

export default ProducerItem
