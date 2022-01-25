import {Button} from "react-bootstrap"
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { useGlobalContext } from "../../context/SuppliersContext";

const SupplierItem = (props)=>{
  const {handleDelSupplierModal,handleEditSupplierForm} = useGlobalContext();
  
 
   const  editDataHandler =()=>{
    const data = {id: props.id, name: props.supplier, country: props.country} 
    handleEditSupplierForm(true, data)


   }




    return (
      <tr className="align-middle px-0">
      <td>{props.id}</td>
      <td>{props.supplier}</td>
      <td>{props.country}</td>
      <td className="text-center ">
       
          <Button variant="primary" size="sm"  onClick={editDataHandler}>
            <MdEdit />
          </Button>
   
      </td>
      <td className="text-center ">
       
          <Button variant="danger" size="sm" onClick={()=>{handleDelSupplierModal(true, props.id)}}>
            <MdDeleteForever />
          </Button>
        
      </td>
    </tr>

    )


}

export default SupplierItem; 