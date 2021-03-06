import axios from "axios";
import "./App.css";
import { useState } from "react";
import PartsList from "./components/Parts/PartsList";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav from "./components/SideNav";
import { Container, Row, Col } from "react-bootstrap";
import MainNavbar from "./components/MainNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brands from "./components/Brands/Brands";
import Nox from "./components/Nox/Nox";
import Producers from "./components/Producers/Producers";
import Suppliers from "./components/Suppliers/Suppliers";
import {AppProvider} from "./context/PartsContext";
import {SuppliersProvider} from "./context/SuppliersContext";



function App(props) {
  const [parts, setParts] = useState([]);
  const [updated, setUpdated] = useState(Date.now());

  // Filtras serveryje
  const serverFilter = (filter) => {
    //  console.log('filter',filter)
    axios
      .get(
        `http://localhost:3003/parts/filter/${filter.f_value}/${filter.f_name}`
      )
      .then((res) => {
        setParts(res.data.parts);
      });
  };

  return (

    <Router>
      <AppProvider>
        <MainNavbar />
        <Container fluid className="border">
          <Row>
            <Col xxl={1}>
              <SideNav />
            </Col>

            <Col className="border border-top-0 border-bottom-0">

              <Routes>
              <Route path="/suppliers" element={<SuppliersProvider><Suppliers /> </SuppliersProvider>} />
                <Route path="/producers" element={<Producers />} />
                <Route path="/parts" element={<PartsList parts={parts} partsUpdate={setUpdated} serverFilter={serverFilter} />}> </Route>
                <Route path="/brands" element={<Brands />} />
                <Route path="/nox" element={<Nox />} />
              </Routes>

            </Col>
          </Row>
        </Container>
      </AppProvider>
    </Router>


  );
}

export default App;
