import { createContext, useContext, useReducer, useEffect, useState} from "react";
import { getSuppliers, supplierAddForm } from "../actions/SuppliersActions";
import SuppliersReducer from "../reducers/SuppliersReducers";
import axios from "axios";


const initialState = {
    suppliers: [],
    suppliersAddForm: false,
}

const SuppliersContext = createContext();

const SuppliersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SuppliersReducer, initialState)
    const [updated, setUpdated] = useState(Date.now());
  
   
    useEffect(() => {
        axios.get("http://localhost:3003/api/suppliers").then((res) => {
          dispatch(getSuppliers(res.data.suppliers));
        
          
         });
      }, []);

    const handleAddSupplierForm = (status)=>{     
        dispatch(supplierAddForm(status))
    }

    

    return (
        <SuppliersContext.Provider value={{...state, handleAddSupplierForm}}>
            {children}
        </SuppliersContext.Provider>
    )

}


export const useGlobalContext = ()=>{
    return useContext(SuppliersContext)
}
export {SuppliersContext, SuppliersProvider}

