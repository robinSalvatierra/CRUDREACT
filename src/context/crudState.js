import React, {useReducer} from "react";
import crudContext from "./crudContext";
import crudReducer from "./crudReducer";

import { ADDPRODUCT } from "./types";

const CrudState = props => {
    const initialState = {
        productos: [],
        editproduct: null,
    }

     // Dispatch para ejecutar las acciones
     const [state, dispatch] = useReducer(crudReducer, initialState)

     const urlbase = 'http://localhost:3000/'

     

    return (
        <crudContext.Provider
            value = {{
                productos: state.productos,
                editproduct: state.editproduct,

            }}
        >
            {props.children}
        </crudContext.Provider>
    )
}

export default CrudState; 