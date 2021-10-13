import React, { useReducer } from "react";
import crudContext from "./crudContext";
import crudReducer from "./crudReducer";
import axios from 'axios';

import { ADDPRODUCT, GETPRODUCTS, SETPRODUCT,EDITPRODUCT, DELETEPRODUCT } from "./types";

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

    const setProduct = (product) => {
        dispatch({
            type: SETPRODUCT,
            payload: product
        })
    }

    const updateProduct = async (producto) => {

        await axios.put(`${urlbase}productos/${producto.id}`, producto);

        dispatch({
            type: EDITPRODUCT,
            payload: producto
        })

    }

    const deleteProduct = async (id) => {
        await axios.delete(`${urlbase}productos/${id}`);

        dispatch({
            type: DELETEPRODUCT,
            payload: id
        })

    }


    return (
        <crudContext.Provider
            value={{
                productos: state.productos,
                editproduct: state.editproduct,
                getProducts: getProducts,
                addProduct: addProduct,
                setProduct: setProduct,
                updateProduct: updateProduct,
                deleteProduct: deleteProduct


            }}
        >
            {props.children}
        </crudContext.Provider>
    )
}

export default CrudState;