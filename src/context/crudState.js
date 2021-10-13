import React, { useReducer } from "react";
import crudContext from "./crudContext";
import crudReducer from "./crudReducer";
import axios from 'axios';

import { ADDPRODUCT, GETPRODUCTS } from "./types";

const CrudState = props => {
    const initialState = {
        productos: [],
        editproduct: null,
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(crudReducer, initialState)

    const urlbase = 'http://localhost:3000/'

    const getProducts = async () => {


        const url = urlbase + 'productos';
        const productos = await axios.get(url);


        dispatch({
            type: GETPRODUCTS,
            payload: productos.data
        })
    }

    const addProduct = async (product) => {

        const url = urlbase + 'productos';
        await axios.post(url, product);

        dispatch({
            type: ADDPRODUCT,
            payload: product
        })
    }


    return (
        <crudContext.Provider
            value={{
                productos: state.productos,
                editproduct: state.editproduct,
                getProducts: getProducts,
                addProduct: addProduct

            }}
        >
            {props.children}
        </crudContext.Provider>
    )
}

export default CrudState;