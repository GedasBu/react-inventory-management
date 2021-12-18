import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import ProducersTable from "./ProducersTable";
import AddProducer from "./AddProducer";
import { MdAdd } from "react-icons/md";

const Producers = () => {
  const [producers, setProducers] = useState([]);
  const [updated, setUpdated] = useState();
  const [showAddProducer, setShowAddProducer] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3003/api/producers`).then((res) => {
      setProducers(res.data.producer);
    });
  }, [updated]);

  const showAddProducerHandler = () => {
    setShowAddProducer(true);
    
  }

  const addProducerHandler = (data) => {
  
    axios.post("http://localhost:3003/api/producers/add", data).then((res) => {
      setUpdated(Date.now());
    });
    setShowAddProducer(false);
  }
  
  const hideAddProducerHandler = () => {
    setShowAddProducer(false);
  }

  return (
    <>
    <AddProducer
     showAddProducer={showAddProducer}
     addProducer={addProducerHandler}
     hideAddBrand={hideAddProducerHandler}
    />


      <Card className=" .brand mt-1 border-bottom-0 rounded-0 bg-light" style={{ width: "18rem" }}>
        <Card.Header as="h5" >Gamintojai</Card.Header>
        
        <div >
          <Button
            variant="success"
            onClick={showAddProducerHandler}
            className="m-1"
            title="Pridėti gamintoją"
            size="sm"
            
          >
           <MdAdd/>
          </Button>
        </div>

        <ProducersTable producers={producers}/>
      </Card>
      
    </>
  );
};

export default Producers;
