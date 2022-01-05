import {Button} from "react-bootstrap"
import { MdDeleteForever, MdEdit } from "react-icons/md";

const SupplierItem = (props)=>{

    return (
        <tr className="align-middle px-0">
      <td>{props.id}</td>
      <td>{props.supplier}</td>
      <td>{props.country}</td>
      <td className="text-center ">
       
          <Button variant="primary" size="sm"  >
            <MdEdit />
          </Button>
   
      </td>
      <td className="text-center ">
       
          <Button variant="danger" size="sm" >
            <MdDeleteForever />
          </Button>
        
      </td>
    </tr>

    )


}

export default SupplierItem; 