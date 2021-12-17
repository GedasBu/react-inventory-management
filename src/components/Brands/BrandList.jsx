import { useState, useEffect } from "react";
import axios from "axios";
import {Card,Button,Table} from "react-bootstrap"
import BrandItem from "./BrandItem";
import Filter from "./Filter"




const BrandList = () => {
  const [brand, setBrand] = useState([]);
  

 // Gauname duomenis is duombazes
  useEffect(() => {
    axios.get(`http://localhost:3003/brand`).then((res) => {
      setBrand(res.data.brand);
    });
  }, []);
  
 
  console.log(brand);

  return (
    <>
   
      <Card className="mt-1 border-bottom-0 rounded-0 bg-light">
        <Card.Header as="h5">Markės</Card.Header>
        <div>
          <Button
            variant="success"
            // onClick={addPartHandler}
            className="m-1"
            title="Pridėti markę"
          >
            +
          </Button>
        </div>
      </Card>

      <Table  bordered hover size="sm" responsive>
        <thead >
          <tr className="align-middle border-bottom-0 bg-light">
            <th className="id">Id</th>
            <th className="th1" >Markė</th>
            <th className="func_button" ></th>
            <th className="func_button"></th>
          </tr>
          <tr className="align-middle bg-light">
            <th>#</th>
            <th>
            {/* <Filter fltrNumber={1} filterFieldData={filterDataHandler} sentToServer={sentToServer} brandsUpdate={props.partsUpdate}/> */}
            </th>
            <th></th>
            <th></th>
            </tr>
          </thead>
          <tbody>
          {brand.map((b) => (
            <BrandItem
              key={b.id}
              id={b.id}
              name={b.brand}            
            //   delPartForm={handleDelModalShow} //Parodome papildoma dleete uzklausa ir savyje nesame id
            //   editPart={editPartDataHandler}
            />
          ))}
        </tbody>
          </Table>




    </>
  );
};

export default BrandList;
