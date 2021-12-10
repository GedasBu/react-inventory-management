import { Table, Button, Card, Row, InputGroup, FormControl} from "react-bootstrap";
import PartsItem from "./PartsItem";
import axios from "axios";
import EditPart from "./EditPart";
import { useState } from "react";
import { AddPart } from "./AddPart";

const PartsList = (props) => {
  const [editPart, setEditPart] = useState({});
  const [addPart, setAddPart] = useState(false);

  // Triname irasa is duomenu bazes. Siunciame uzklausa i serveri

  const delPartHandler = (id) => {
    axios.delete("http://localhost:3003/parts/delete/" + id).then((res) => {
      props.partsUpdate(Date.now());
    });
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

  const editPartDataHandler = (id, partNumber, partNumber2, description) => {
    setEditPart({
      id: id,
      part_number: partNumber,
      part_number_1: partNumber2,
      description: description,
      main_producer_id: "",
      supplier_id: "",
    });
  };
  const addPartHandler = () => setAddPart(true);
  const hideAddPartHandler = () => setAddPart(false);

  return (
    <>
      {Object.keys(editPart).length !== 0 ? (
        <EditPart editPartData={editPart} updatePartData={updatePartHandler} />
      ) : null}

      {addPart ? <AddPart hideAddPart={hideAddPartHandler} /> : null}

      <Card>
        <div className="button">
          <Button variant="primary" onClick={addPartHandler} className="m-1">
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
              <div>
              <InputGroup >
              <input type="text" placeholder="Filtras..." className="border"></input>             
              <Button className="border"
                  variant="outline-secondary"
                  title="Panikinti filtrą"
                  size="sm"
                >
                  x
                </Button>{" "}
              </InputGroup>
              </div>
            </th>
            <th>
            <InputGroup >
              <input type="text" placeholder="Filtras..." className="border"></input>             
              <Button className="border"
                  variant="outline-secondary"
                  title="Panikinti filtrą"
                  size="sm"
                >
                  x
                </Button>{" "}
              </InputGroup>
              
            </th>
            <th>
              <input type="text" placeholder="Filtras..."></input>
            </th>
            <th>
              <input type="text" placeholder="Filtras..."></input>
            </th>
            <th>
              <input type="text" placeholder="Filtras..."></input>
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
              delPart={delPartHandler}
              editPart={editPartDataHandler}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default PartsList;
