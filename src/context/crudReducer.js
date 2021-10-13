import {
    ADDPRODUCT,
    GETPRODUCTS,
    SETPRODUCT,
    EDITPRODUCT

} from './types';

export default (state, action) => {
    switch (action.type) {
        case GETPRODUCTS:
            return {
                ...state,
                productos: action.payload
            }
        case ADDPRODUCT:
            return {
                ...state,
                productos: [...state.productos, action.payload]

            }
        case SETPRODUCT:
            //console.log(action.payload)
            return {
                ...state,
                editproduct: action.payload,

            }
        case EDITPRODUCT:
            return {
                ...state,
                productos: state.productos.map(producto =>
                    producto.id === action.payload.id ? producto = action.payload : producto
                )
            }
        default:
            return state;
    }
}