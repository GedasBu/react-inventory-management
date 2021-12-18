import {Table} from "react-bootstrap"
import ProducersItem from "./ProducersItem"

const ProducersTable = (props)=>{
  

    return(
        <Table bordered hover size="sm" responsive>
            <thead className="bg-light">
                <tr className="align-middle border-bottom-0">
                    <th></th>
                    <th>Gamintojas</th>
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
                {props.producers.map((p)=>(
                    <ProducersItem
                    key={p.id}
                    id={p.id}
                    producer={p.producer}
                    // delProducer={delProducersHandler}
                    // editProducer={editProducerHandler}                
                    />))
                }  
            </tbody>          

        </Table>
    )
}

export default ProducersTable