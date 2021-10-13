import {
    ADDPRODUCT,
    GETPRODUCTS

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
        default:
            return state;
    }
}