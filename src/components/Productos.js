import React, {useContext, useEffect} from 'react'
import crudContext from '../context/crudContext';
function Productos() {

    const context = useContext(crudContext)
    const { getProducts, productos } = context;

    useEffect(() => {

        getProducts();
    }, []);


    return (
        <>
            <h2 className="text-center my-5">Listado de Productos</h2>



            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {   //Operador ternario condicional para ver si no hay productos muestra un msj
                        //de lo contrario realiza el .map de los productos
                        productos.length === 0 ? (<tr><td>No existen productos</td></tr>)    : (
                            productos.map(producto => (
                                <tr><td>{producto.nombre}</td></tr>
                            ))
                        )}
                </tbody>
            </table>
        </>
    )
}

export default Productos
