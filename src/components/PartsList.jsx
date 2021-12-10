import {
  Table,
  Button,
  Card,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import PartsItem from "./PartsItem";
import axios from "axios";
import EditPart from "./EditPart";
import { useState } from "react";
import { AddPart } from "./AddPart";
import Filter from "./Filter";
import DeleteForm from "./DeleteForm";
import { MdTurnedInNot } from "react-icons/md";

const PartsList = (props) => {
  const [editPart, setEditPart] = useState({});
  const [addPartForm, setAddPartForm] = useState(false);
  const [editPartForm, setEditPartForm] = useState(false);
  const [showDelModal, setshowDelModal] = useState(false);
  const [delPartId, setDelPartId] = useState();

  const [filterValue, setFilterValue] = useState({
    f_name:'',
    f_value:''
  });

  const filterHandler= (e)=>{   
      if (e.key === "Enter") {
        e.preventDefault();
        // setFilterValue({...filterValue,f_name:e.target.name,
        //   f_value: e.target.value})
          props.serverFilter({f_name:e.target.name,f_value: e.target.value});  
        } 
       
      // console.log(filterValue)      
  };
 

 


  const handleDelModalClose = () => {
    setshowDelModal(false);
  };
  // show suteikiame id reiksme, kas iskart yra true todel atsidaro istrynimo langas. Id persiunčiame i del modala
  const handleDelModalShow = (id) => {
    setshowDelModal(true);
    //Steitui priskiriam trinamos pozicijos Id
    setDelPartId(id);
  };

  // Pridedame nauja irasa i duombaze. Siunciam uzklausa ir serveri
  const addPartsHandler = (data) => {
    axios.post("http://localhost:3003/parts/add", data).then((res) => {
      props.partsUpdate(Date.now());
    });
  };

  // Triname irasa is duomenu bazes. Siunciame uzklausa i serveri
  const delPartHandler = () => {
    console.log("delete id is state", delPartId);
    axios
      .delete("http://localhost:3003/parts/delete/" + delPartId)
      .then((res) => {
        props.partsUpdate(Date.now());
      });

    //Filtras serverio puseje
    const serverFilter = (filter) => {
      // axios.get("http://localhost:3003/dominos/filter/"+filter).then((res) => {
      //   setPlates(res.data.dominos.map(p=>({id:p.id,left:p.left_side,right:p.right_side})));
      // });
    };

    //Uždarome delete issokanti langa
    setshowDelModal(false);
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
    setEditPartForm(true);
  };

  //Atidarome naujos detales forma pakeiciant state
  const addPartHandler = () => setAddPartForm(true);

  //Paslepiame naujos detales ivedimo forma
  const hideAddPartHandler = () => setAddPartForm(false);

  //Paslepiame detales redagavimo forma
  const hideEditPartFormHandler = () => setEditPartForm(false);
  const [value,setValue] = useState()
  

  return (
    <>
      {/* Redagavimo formos valdymas ir duomenu persiuntimas */}
      {editPartForm ? (
        <EditPart
          editPartData={editPart}
          updatePartData={updatePartHandler}
          hideEditPart={hideEditPartFormHandler}
        />
      ) : null}

      {/* Naujos detales ivedimo form */}
      {addPartForm ? (
        <AddPart hideAddPart={hideAddPartHandler} newPart={addPartsHandler} />
      ) : null}

      {/* Parodome detales istrynimo Modala */}
      {showDelModal ? (
        <DeleteForm
          show={showDelModal}
          delModalClose={handleDelModalClose}
          delPartFromServer={delPartHandler}
        />
      ) : null}

      <Card className="mt-1">
        <div>
          <Button
            variant="success"
            onClick={addPartHandler}
            className="m-1"
            title="Pridėti detalę"
          >
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
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Filtras..."
                  className="border"
                  name="1"
                  valu={value}
                  onKeyPress={filterHandler}
                  
                ></Form.Control>
                <Button
                  className="border"
                  variant="outline-secondary"
                  title="Panikinti filtrą"
                  size="sm"
                 
                >
                  x
                </Button>{" "}
              </InputGroup>
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
