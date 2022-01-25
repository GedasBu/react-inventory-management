import { createContext, useContext, useReducer, useEffect, useState} from "react";
import { getSuppliers, supplierAddForm, delSupplier,delSupplierModal,editSupplierForm} from "../actions/SuppliersActions";
import SuppliersReducer from "../reducers/SuppliersReducers";
import axios from "axios";


const initialState = {
    suppliers: [],
    supplierAddForm: false,
    delModal: false,
    delSupplierId:'',
    supplierEditForm: false,
    supplierEditData: {name:'', country:''}
   
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

    const handleEditSupplierForm = (status, data)=>{
        dispatch(editSupplierForm(status, data))
       
            
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

      const editSupplierHandler =(data)=>{
        axios
        .put("http://localhost:3003/api/suppliers/update/" + data.id, data)
        .then((res) => {
          setUpdated(Date.now());
        });

      }

    

 

    return (
        <SuppliersContext.Provider value={{...state, handleAddSupplierForm,addSupplierHandler,deleteSupplierHandler,handleDelSupplierModal,handleEditSupplierForm,editSupplierHandler }}>
            {children}
        </SuppliersContext.Provider>
    )

}


export const useGlobalContext = ()=>{
    return useContext(SuppliersContext)
}
export {SuppliersContext, SuppliersProvider}

