import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom';
import crudContext from '../context/crudContext';


function Producto({producto}) {
    const { nombre, precio, id } = producto;




    
    return (
        <tr>
        <td>{nombre}</td>
        <td><span className="font-weight-bold">${precio}</span></td>
        <td className="acciones">
            <button 
                type="button"               
                className="btn btn-primary mr-2"

                >
                Editar 
            </button>
            <button 
                type="button"
                className="btn btn-danger"
                     
            >Eliminar</button>
        </td>
    </tr>
    )
}

export default Producto
