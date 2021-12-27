import { createContext, useContext, useReducer, useEffect } from "react";
import { getParts, addPartsForm } from "../actions/PartsActions";
import PartsReducer from "../reducers/PartsReducers";
import axios from "axios";


const initialState = {
    parts: [],
    partsAddForm: false,
}

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PartsReducer, initialState)
   
    useEffect(() => {
        axios.get("http://localhost:3003/parts").then((res) => {
          dispatch(getParts(res.data.parts));
          
         });
      }, []);

    const handleAddPartForm = (status)=>{
        console.log(status)
        dispatch(addPartsForm(status))
    }


    return (
        <AppContext.Provider value={{...state, handleAddPartForm}}>
            {children}
        </AppContext.Provider>
    )

}


export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext, AppProvider}
