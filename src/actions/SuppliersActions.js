import { ADD_SUPPLIER, DEL_SUPPLIER, EDIT_SUPPLIER, GET_SUPPLIERS, OPEN_ADD_SUPPLIER_FORM, OPEN_DEL_SUPPLIER_MODAL, OPEN_EDIT_SUPPLIER_FORM} from "./types";

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

export const editSupplier = (data)=>{
    return  {
        type: EDIT_SUPPLIER,
        payload: data
    }
}

export const editSupplierForm = (status, data)=>{
    return {
        type: OPEN_EDIT_SUPPLIER_FORM,
        payload: status,
        data: data
    }
}