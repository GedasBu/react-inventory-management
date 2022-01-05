import { GET_PARTS, OPEN_ADD_FORM } from "./types";

export const getParts =(data)=>{
    return {
        type: GET_PARTS,
        payload: data
    }
}
export const addPartsForm = (status)=>{
    return{
        type: OPEN_ADD_FORM,
        payload: status
    }
}