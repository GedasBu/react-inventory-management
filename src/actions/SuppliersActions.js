import { ADD_SUPPLIER, DEL_SUPPLIER, GET_SUPPLIERS, OPEN_ADD_SUPPLIER_FORM, OPEN_DEL_SUPPLIER_MODAL} from "./types";

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

export const addSupplier = (data)=>{
    return {
        type: ADD_SUPPLIER,
        payload: data
    }
}

export const delSupplier = (data)=>{
    return {
        type: DEL_SUPPLIER,
        payload: data
    }
}
export const delSupplierModal = (status,id)=>{
    return {
        type: OPEN_DEL_SUPPLIER_MODAL,
        payload: status,
        id:id
    }
}