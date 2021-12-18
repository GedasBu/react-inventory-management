import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Table } from "react-bootstrap";
import BrandItem from "./BrandItem";
import Filter from "./Filter";
import AddBrand from "./AddBrand";
import DeleteForm from "./DeleteForm";
import EditBrand from "./EditBrand"

const BrandList = () => {
  const [brand, setBrand] = useState([]);
  const [showAddBrand, setShowAddBrand] = useState(false);
  const [updated, setUpdated] = useState();
  const [showDelModal,setShowDelModal] = useState(false)
  const [delBrandId,setDelBrandId] = useState(false)
  const [editBrand, setEditBrand] = useState({});
  const [showEditBrand, setShowEditBrand] = useState(false)

  // Gauname duomenis is duombazes
  useEffect(() => {
    axios.get(`http://localhost:3003/api/brands`).then((res) => {
      setBrand(res.data.brand);
    });
  }, [updated]);

  const showAddBrandHandler = () => {
    setShowAddBrand(true);
  }
  const addBrandHandler = (data) => {
    axios.post("http://localhost:3003/api/brands/add", data).then((res) => {
      setUpdated(Date.now());
    });
  }
  const hideAddBrandHandler = () => {
    setShowAddBrand(false);
  }
// Trinamas irasas is duomenu bazes ir atnaujinamas sąrašas

const showDelModalHandler =(id)=>{
    setShowDelModal(true)
    setDelBrandId(id);
    
  }
  const deleteBrandHandler = () => {
  
    axios
      .delete("http://localhost:3003/api/brands/delete/" + delBrandId)
      .then((res) => {
        setUpdated(Date.now());
      });
    setShowDelModal(false)
    
  }; 

  const hideDelModalHandler=()=>{
    setShowDelModal(false)
  }

  const showEditBrandHandler =(id,brand)=>{
    setShowEditBrand(true)
    setEditBrand({id:id,
      brand:brand,
    })
       

  }

  const setEditBrandHandler =(data)=>{   
    console.log('axios', data.id)
    axios
      .put("http://localhost:3003/api/brands/update/" + data.id, data)
      .then((res) => {
        setUpdated(Date.now());
      });

      setShowEditBrand(false);

  }

  const hideEditBrandHandler=()=>{
    setShowEditBrand(false)

  }




  return (
    <>
    { showEditBrand &&<EditBrand
    editBrandData={editBrand}
    hideEditBrand={hideEditBrandHandler}
    setEditBrand={setEditBrandHandler}
    
    /> }
    


      <AddBrand
        showAddBrand={showAddBrand}
        addBrand={addBrandHandler}
        hideAddBrand={hideAddBrandHandler}
      />

      {/* Parodome detales istrynimo Modala */}
      {showDelModal ? (
        <DeleteForm
        delModalClose={hideDelModalHandler}
        show={showDelModal}
        delBrand={deleteBrandHandler}              
        /> ) : null}

      <Card className=" .brand mt-1 border-bottom-0 rounded-0 bg-light">
        <Card.Header as="h5">Markės</Card.Header>
        <div>
          <Button
            variant="success"
            onClick={showAddBrandHandler}
            className="m-1"
            title="Pridėti markę"
          >
            +
          </Button>
        </div>
      </Card>

      <Table bordered hover size="sm" responsive >
        <thead>
          <tr className="align-middle border-bottom-0 bg-light">
            <th className="id">Id</th>
            <th className="th1">Markė</th>
            <th className="func_button"></th>
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
                delBrandForm={showDelModalHandler} //Parodome papildoma dleete uzklausa ir savyje nesame id
                showEditBrand={showEditBrandHandler}
              
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BrandList;
