import { ADD_SUPPLIER, DEL_SUPPLIER, GET_SUPPLIERS, OPEN_ADD_SUPPLIER_FORM, OPEN_DEL_SUPPLIER_MODAL, OPEN_EDIT_SUPPLIER_FORM } from "../actions/types";

const SuppliersReducer = (state, action) => {
   
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload
            }
        case OPEN_ADD_SUPPLIER_FORM:
            return {
                ...state,
                supplierAddForm: action.payload
            }
        case ADD_SUPPLIER:
            return {
                ...state,
                addSupplier: action.payload
            }
        case DEL_SUPPLIER:
            return {
                ...state,
                delSupplier: action.payload
            }
        case OPEN_DEL_SUPPLIER_MODAL:
            return {
               ...state,
               delModal: action.payload,
               delSupplierId: action.id     
            }
        case OPEN_EDIT_SUPPLIER_FORM:
            return{
                ...state,
                supplierEditForm: action.payload,
                supplierEditData: action.data

            }

        default: return state;

    }


}

export default SuppliersReducer