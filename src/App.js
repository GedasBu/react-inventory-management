import axios from "axios";
import "./App.css";
import { useState } from "react";
import PartsList from "./components/PartsList";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./components/SideNav";
import { Container,Row,Col } from "react-bootstrap";


function App(props) {
  const [parts, setParts] = useState([]);
  const [updated, setUpdated] = useState(Date.now());

   // Filtras serveryje
   const serverFilter = filter =>{
     console.log('filter',filter)
    axios.get(`http://localhost:3003/parts/filter/${filter.f_value}/${filter.f_name}`).then((res) => {
      
      setParts(res.data.parts)  
          

    });
    
  }

  // Gauname duomenis is duombazes
  useEffect(() => {
    axios.get("http://localhost:3003/parts").then((res) => {
      setParts(res.data.parts);
    });
  }, [updated]);

  return (
    <>
<h1>React Order Management...</h1>
      <Container fluid className="border">
        
        <Row>
          <Col xxl={1} >
           <SideNav />
         </Col>

         <Col className="border">
         <PartsList parts={parts} partsUpdate={setUpdated} serverFilter={serverFilter}></PartsList>
         </Col>
        

        </Row>
        
      </Container>

      
    {/* </div> */}
      
    </>
  );
}

export default App;
