import { createContext, useContext, useReducer, useEffect, useState} from "react";
import { getSuppliers, supplierAddForm, delSupplier,delSupplierModal} from "../actions/SuppliersActions";
import SuppliersReducer from "../reducers/SuppliersReducers";
import axios from "axios";


const initialState = {
    suppliers: [],
    supplierAddForm: false,
    delModal: false,
    delSupplierId:''
   
}

const SuppliersContext = createContext();

const SuppliersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SuppliersReducer, initialState)
    const [updated, setUpdated] = useState(Date.now());
  
   
    useEffect(() => {
        axios.get("http://localhost:3003/api/suppliers").then((res) => {
          dispatch(getSuppliers(res.data.suppliers));
        
          
         });
      }, [updated]);

    const handleAddSupplierForm = (status)=>{     
        dispatch(supplierAddForm(status)) 
          
    }

    const handleDelSupplierModal = (status, id)=>{
        dispatch(delSupplierModal(status, id))
       
     
    }

    const addSupplierHandler = (data) => {
        axios.post("http://localhost:3003/api/suppliers/add", data).then((res) => {
          setUpdated(Date.now());
        });
      }

      const deleteSupplierHandler = (id) => {
           
        axios
          .delete("http://localhost:3003/api/suppliers/delete/" + id)
          .then((res) => {
            setUpdated(Date.now());
          });
        
          handleDelSupplierModal(false,id);
       
        
      }; 

    

 

    return (
        <SuppliersContext.Provider value={{...state, handleAddSupplierForm,addSupplierHandler,deleteSupplierHandler,handleDelSupplierModal }}>
            {children}
        </SuppliersContext.Provider>
    )

}


export const useGlobalContext = ()=>{
    return useContext(SuppliersContext)
}
export {SuppliersContext, SuppliersProvider}

