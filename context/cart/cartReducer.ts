import { ICartProduct } from '../../interfaces';
import { CartInitialState, Cart_Initial_State } from './CartProvider';

type cartActionType = 
| { type: '[Cart] - Load Cart from cookies',  payload: ICartProduct[] } 
| { type: '[Cart] - Update Product In Cart',  payload: ICartProduct[] } 
| { type: '[Cart] - Change product quantyti',  payload: ICartProduct } 
| { type: '[Cart] - Remove product In Cart',  payload: ICartProduct } 
| { 
    type: '[Cart] - Update Order Summary',  
    payload: {
        numberOfItems: number;
        subTotal: number;
        tax: number;
        total: number; 
    } 
} 

export const cartReducer = ( state = Cart_Initial_State,  action: cartActionType): CartInitialState => {

    switch ( action.type ) {
        case '[Cart] - Load Cart from cookies':
            return {
                ...state,
                cart: action.payload,
            }
        case '[Cart] - Update Product In Cart':
            return {
                ...state,
                cart: [ ...action.payload ]
            }

        case '[Cart] - Change product quantyti':
            return {
                ...state,
                cart: state.cart.map( product => {
                    if ( product._id !== action.payload._id ) return product;
                    if ( product.size !== action.payload.size ) return product;

                    product.quantity = action.payload.quantity;
                    return action.payload; 

                }) 
            }
        case '[Cart] - Remove product In Cart':
            return {
                ...state,
                cart: state.cart.filter( p => !(p._id === action.payload._id && p.size === action.payload.size) )
            }
        case '[Cart] - Update Order Summary':
            return {
                ...state,
                
            }
    
        default:
            return state;
    }
}