import { GET_PARTS, OPEN_ADD_FORM } from "../actions/types";

const PartsReducer = (state, action) => {
    switch (action.type) {
        case GET_PARTS:
            return {
                ...state,
                parts: action.payload
            }
            case OPEN_ADD_FORM:
                return {
                    ...state,
                    partsAddForm: action.payload
                }
        default: return state;
      
    }
    

}

export default PartsReducer