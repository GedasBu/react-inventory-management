import {Table} from "react-bootstrap"
import { useGlobalContext } from "../../context/SuppliersContext"
import SupplierItem from "./SupplierItem";

const SuppliersTable =()=>{
    const {suppliers}=useGlobalContext();

    console.log('is table', suppliers)


    return (

        <Table bordered hover size="sm" responsive>
        <thead className="bg-light">
            <tr className="align-middle border-bottom-0">
                <th></th>
                <th>Tiekėjas</th>
                <th>Šalis</th>

                <th className="funkc_button"></th>
                <th className="funkc_button"></th>
            </tr>
            <tr >
                <th>#</th>
                <th>Filtras</th>
                <th></th>
                <th ></th>
            </tr>
        </thead>
        <tbody>
            {suppliers.map((p)=>(
                <SupplierItem
                key={p.id}
                id={p.id}
                supplier={p.name}
                country={p.country}
                // delProducer={delProducersHandler}
                // editProducer={editProducerHandler}                
                />))
            }  
        </tbody>          

    </Table>
    )
}

export default SuppliersTable