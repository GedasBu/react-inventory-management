import { Card, Button } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import {useGlobalContext} from "../../context/SuppliersContext"
import DeleteForm from "../Suppliers/DeleteForm";
import AddSupplier from "./AddSupplier";
import SuppliersTable from "./SuplliersTable";
import EditSupplier from "./EditSupplier";




const Suppliers =()=>{
    const {suppliers,supplierAddForm, handleAddSupplierForm,delSupplierId,supplierEditData } = useGlobalContext();  
    



    return(

        <>
        <AddSupplier />
        <DeleteForm />
        <EditSupplier data={supplierEditData}/>

         <Card className=" .brand mt-1 border-bottom-0 rounded-0 bg-light" style={{ width: "18rem" }}>
        <Card.Header as="h5" >Tiekėjai</Card.Header>
        
        <div >
          <Button
            variant="success"
            onClick={()=>{handleAddSupplierForm(true)}}
            className="m-1"
            title="Pridėti tiekėją"
            size="sm"
            
          >
           <MdAdd/>
          </Button>
        </div>

        <SuppliersTable />
      </Card>
        
        </>



    )
}

export default Suppliers