import React, {useContext} from 'react'
import { Formik } from 'formik';
import crudContext from '../context/crudContext';

function EditarProductos({history}) {

    const context = useContext(crudContext)
    const { editproduct, updateProduct } = context;

    console.log(editproduct);
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <Formik
                            initialValues={{ nombre: editproduct.nombre, precio: editproduct.precio , id: editproduct.id}}
                            validate={values => {
                                const errors = {};
                                if (!values.nombre) {
                                    errors.nombre = 'Required';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                //values
                                updateProduct(values)
                                //console.log(values)
                                history.push('/');

                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Nombre Producto</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre Producto"
                                            name="nombre"
                                            onChange={handleChange}

                                            value={values.nombre}
                                        />
                                    </div>

                                    {errors.nombre && touched.nombre && errors.nombre}

                                    <div className="form-group">
                                <label>Precio Producto</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Precio Producto"
                                        name="precio"
                                        onChange={handleChange}

                                        value={values.precio}
                                    />
                                   </div>
                                    <button type="submit"   className="btn btn-success font-weight-bold text-uppercase d-block w-100" disabled={isSubmitting}>
                                        Guardar
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProductos
