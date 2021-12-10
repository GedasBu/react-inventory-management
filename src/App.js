import axios from "axios";
import "./App.css";
import { useState } from "react";
import PartsList from "./components/PartsList";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddPart } from "./components/AddPart";

function App(props) {
  const [parts, setParts] = useState([]);
  const [updated, setUpdated] = useState(Date.now());

  // const partsList =()=>{
  //   axios.get("http://localhost:3003/parts").then((res) => {
  //     // console.log(res.data.parts)
  //     setParts(res.data.parts);
  //   });

  // }

  // Gauname duomenis is duombazes
  useEffect(() => {
    axios.get("http://localhost:3003/parts").then((res) => {
      setParts(res.data.parts);
    });
  }, [updated]);

  // Pridedame irasa i duomenu baze
  const addPartsHandler = (data) => {
      axios.post("http://localhost:3003/parts/add", data).then((res) => {
      setUpdated(Date.now());
    });
  };

  return (
    <div className="container">
      <h1>React Order Management...</h1>
      {/* <AddPart newPart={addPartsHandler} /> */}
      <PartsList parts={parts} partsUpdate={setUpdated} />
    </div>
  );
}

export default App;
