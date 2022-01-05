import { GET_SUPPLIERS, OPEN_ADD_SUPPLIER_FORM} from "./types";

export const getSuppliers =(data)=>{
    return {
        type: GET_SUPPLIERS,
        payload: data
    }
}
export const supplierAddForm = (status)=>{
    return{
        type: OPEN_ADD_SUPPLIER_FORM,
        payload: status
    }
}