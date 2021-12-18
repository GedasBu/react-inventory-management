import {
  Table,
  Button,
  Card,
    
} from "react-bootstrap";
import PartsItem from "./PartsItem";
import axios from "axios";
import EditPart from "./EditPart";
import { useState, useEffect } from "react";
import { AddPart } from "./AddPart";
import Filter from "./Filter";
import DeleteForm from "./DeleteForm";
import { MdAdd } from "react-icons/md";


const PartsList = (props) => {
  const [editPart, setEditPart] = useState({});
  const [addPartForm, setAddPartForm] = useState(false);
  const [editPartForm, setEditPartForm] = useState(false);
  const [showDelModal, setshowDelModal] = useState(false);
  const [delPartId, setDelPartId] = useState();
  const [filterValue, setFilterValue] = useState({f_name:'', f_value:'' }); 
  const filterElementNumber =[1,2,3,4,5]
  const [parts, setParts] = useState([]);
  const [updated, setUpdated] = useState(Date.now());

 

  const handleDelModalClose = () => {
    setshowDelModal(false);
  };
  // show suteikiame id reiksme, kas iskart yra true todel atsidaro istrynimo langas. Id persiunčiame i del modala
  const handleDelModalShow = (id) => {
    setshowDelModal(true);
    //Steitui priskiriam trinamos pozicijos Id
    setDelPartId(id);
  };

  // Filtras serveryje
  const serverFilter = () => {
     console.log('filter',filterValue)
    axios
      .get(
        `http://localhost:3003/parts/filter/${filterValue.f_value}/${filterValue.f_name}`
      )
      .then((res) => {
        setParts(res.data.parts);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3003/parts").then((res) => {
      setParts(res.data.parts);
      console.log("parts")
    });
  }, [updated]);

  // Pridedame nauja irasa i duombaze. Siunciam uzklausa ir serveri
  const addPartsHandler = (data) => {
   axios.post("http://localhost:3003/parts/add", data).then((res) => {
    setUpdated(Date.now());
    });
  };

  // Triname irasa is duomenu bazes. Siunciame uzklausa i serveri
  const delPartHandler = () => {
     axios
      .delete("http://localhost:3003/parts/delete/" + delPartId)
      .then((res) => {
        setUpdated(Date.now());
      });

    //Uždarome delete issokanti langa
    setshowDelModal(false);
  };

  //Atnaujiname irasa duomenu bazeje. Siunciame uzklausa i serveri.

  const updatePartHandler = (data) => {
    console.log(data.id)
    axios
      .put("http://localhost:3003/parts/update/" + data.id, data)
      .then((res) => {
        setUpdated(Date.now());
      });
    setEditPart({});
  };

  // Irasome redaguojamos prekes esamas reiksmes i state ir atidarome detales redagavimo forma
  const editPartDataHandler = (id, partNumber, partNumber2, description, brand, producer) => {
    setEditPart({
      id: id,
      part_number: partNumber,
      part_number_1: partNumber2,
      description: description,
      brand_name: brand,
      producer_name: producer,
    });
    //Atidarome detales redagavimo forma
    setEditPartForm(true);
  };

  //Atidarome naujos detales forma pakeiciant state
  const addPartHandler = () => setAddPartForm(true);

  //Paslepiame naujos detales ivedimo forma
  const hideAddPartHandler = () => setAddPartForm(false);

  //Paslepiame detales redagavimo forma
  const hideEditPartFormHandler = () => setEditPartForm(false);
  
//Tikriname ar buvo paspaustas Enter mygtukas filtre ir priskiriame reiksme steitui.
 const filterDataHandler=(fltrValue,fltrNumber)=>{
  setFilterValue({...filterValue, f_name:fltrNumber, f_value:fltrValue})
  console.log('PartsList', fltrValue)

}

// const sentToServer =()=>{
//     serverFilter(filterValue)
//   }


  return (
    <>
      {/* Redagavimo formos valdymas ir duomenu persiuntimas */}
      {editPartForm ? (
        <EditPart
          editPartData={editPart}
          updatePartData={updatePartHandler}
          hideEditPart={hideEditPartFormHandler}
          showEditForm={editPartForm}
        />
      ) : null}

      {/* Naujos detales ivedimo form */}
      {addPartForm ? (
        <AddPart hideAddPart={hideAddPartHandler} newPart={addPartsHandler} partsUpdate={setUpdated} showAddPartForm={addPartForm}/>
      ) : null}

      {/* Parodome detales istrynimo Modala */}
      {showDelModal ? (
        <DeleteForm
          show={showDelModal}
          delModalClose={handleDelModalClose}
          delPartFromServer={delPartHandler}
        />
      ) : null}

      <Card className="mt-1 border-bottom-0 rounded-0 ">
      <Card.Header as="h5" className="bg-light">Prekės</Card.Header>
     <div>         
          <Button
            variant="success"
            onClick={addPartHandler}
            className="m-1"
            title="Pridėti detalę"
            size="sm"
          >
           <MdAdd/>
          </Button>
      </div>
      </Card>
      

      <Table  bordered hover size="sm" responsive>
        <thead >
          <tr className="align-middle border-bottom-0 bg-light">
            <th className="id">Id</th>
            <th className="th1" >Numeris</th>
            <th className="th1">Numeris 2</th>
            <th>Pavadinimas</th>
            <th className="th1">Markė</th>
            <th className="th1">Gamintojas</th>
            <th className="funkc_button" ></th>
            <th className="funkc_button"></th>
          </tr>
          <tr className="align-middle bg-light">
            <th>#</th>            
            {filterElementNumber.map(x=>(<Filter key = {x} fltrNumber={x} filterFieldData={filterDataHandler} sentToServer={serverFilter} partsUpdate={setUpdated}/>))}
                    
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {parts.map((p) => (
            <PartsItem
              key={p.id}
              id={p.id}
              number={p.part_number}
              number2={p.part_number_1}
              description={p.description}
              brand={p.brand_name}
              producer={p.producer_name}
              delPartForm={handleDelModalShow} //Parodome papildoma dleete uzklausa ir savyje nesame id
              editPart={editPartDataHandler}
            />
          ))}
        </tbody>
      </Table>
      
    </>
  );
};

export default PartsList;
