import { GET_SUPPLIERS, OPEN_ADD_SUPPLIER_FORM } from "../actions/types";

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
        default: return state;
      
    }
    

}

export default SuppliersReducer