import {
  Table,
  Button,
  Card,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PartsItem from "./PartsItem";
import axios from "axios";
import EditPart from "./EditPart";
import { useState } from "react";
import { AddPart } from "./AddPart";
import Filter from "./Filter";
import DeleteForm from "./DeleteForm"

const PartsList = (props) => {
  const [editPart, setEditPart] = useState({});
  const [addPartForm, setAddPartForm] = useState(false);
  const [editPartForm, setEditPartForm] = useState(false);
  const [show, setShow] = useState(false);
      
  const handleClose = () => {
    setShow(false);
  console.log(show);
  
  
  
    }
      const handleShow = () => setShow(true);
  console.log(show)
  
  // Pridedame nauja irasa i duombaze. Siunciam uzklausa ir serveri
  const addPartsHandler = (data) => {
    axios.post("http://localhost:3003/parts/add", data).then((res) => {
    props.partsUpdate(Date.now());
  });
};

  // Triname irasa is duomenu bazes. Siunciame uzklausa i serveri

  const delPartHandler = (id) => {
    // axios.delete("http://localhost:3003/parts/delete/" + id).then((res) => {
    //   props.partsUpdate(Date.now());
    // });

  };

  //Atnaujiname irasa duomenu bazeje. Siunciame uzklausa i serveri.

  const updatePartHandler = (data) => {
    axios
      .put("http://localhost:3003/parts/update/" + data.id, data)
      .then((res) => {
        props.partsUpdate(Date.now());
      });
    setEditPart({});
  };


// Irasome redaguojamos prekes esamas reiksmes i state ir atiodarome detales redagavimo forma
  const editPartDataHandler = (id, partNumber, partNumber2, description) => {
    setEditPart({
      id: id,
      part_number: partNumber,
      part_number_1: partNumber2,
      description: description,
      main_producer_id: "",
      supplier_id: "",
    });
    //Atidarome detales redagavimo forma
    setEditPartForm(true)
  };

  //Atidarome naujos detales forma pakeiciant state
  const addPartHandler = () => setAddPartForm(true);

  //Paslepiame naujos detales ivedimo forma
  const hideAddPartHandler = () => setAddPartForm(false);

  //Paslepiame detales redagavimo forma
  const hideEditPartFormHandler = ()=>setEditPartForm(false);
 

  return (
    <>
    {/* Redagavimo formos valdymas ir duomenu persiuntimas */}
       {
          (editPartForm)?<EditPart editPartData={editPart} updatePartData={updatePartHandler} hideEditPart={hideEditPartFormHandler} />
       : null}

{/* Naujos detales ivedimo form */}
      {addPartForm ? <AddPart hideAddPart={hideAddPartHandler} newPart={addPartsHandler} /> : null}
      {/* Parodome detales istrynimo Modala */}
      {(show)?<DeleteForm show={show} delModalClose={handleClose}/>:null}

      <Card className="mt-1" >      
        <div >
          <Button variant="success" onClick={addPartHandler} className="m-1" title="Pridėti detalę">
            +
          </Button>
        </div>
      </Card>

      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th className="justify-content-center">Id</th>
            <th>Numeris</th>
            <th>Numeris 2</th>
            <th>Pavadinimas</th>
            <th>Markė</th>
            <th>Gamintojas</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>#</th>
            <th>
              <Filter />
            </th>
            <th>
              <Filter />
            </th>
            <th>
              <Filter />
            </th>
            <th>
              <Filter />
            </th>
            <th>
              <Filter />
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.parts.map((p) => (
            <PartsItem
              key={p.id}
              id={p.id}
              number={p.part_number}
              number2={p.part_number_1}
              description={p.description}
              brand={p.main_producer_id}
              supplier={p.supplier_id}
              delPart={handleShow}
              editPart={editPartDataHandler}
              
            />
          ))}
        </tbody>
      </Table>

      
    </>
  );
};

export default PartsList;
