import { useEffect, useReducer } from 'react';
import { CartContext } from './cartContext';
import { cartReducer } from './cartReducer';
import { ICartProduct } from '../../interfaces';
import Cookie from 'js-cookie';

export interface CartInitialState {
    cart: ICartProduct[]
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;
}

interface Props {
     children: JSX.Element | JSX.Element[]
}

export const Cart_Initial_State: CartInitialState = {
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
}

export const CartProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer( cartReducer, Cart_Initial_State)

    useEffect(() => {
        try {
            const products = Cookie.get('cart') ? JSON.parse( Cookie.get('cart')! ) : [];
            dispatch({ type: '[Cart] - Load Cart from cookies',  payload: products} )
        } catch (error) {
            dispatch({ type: '[Cart] - Load Cart from cookies',  payload: [] } )
        }
    }, [])
    

    useEffect(() => {
        Cookie.set('cart', JSON.stringify( state.cart )  )
    }, [ state.cart ])

    useEffect(() => {

        const numberOfItems = state.cart.reduce( ( prev, current ) =>  current.quantity + prev, 0);
        const subTotal  = state.cart.reduce( ( prev, current ) =>  current.price * current.quantity + prev , 0)
        const taxRate = Number( process.env.NEXT_PUBLIC_TAX_RATE || 0 );

        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * ( taxRate + 1 )
        }

        console.log(orderSummary);
        dispatch({ type: '[Cart] - Update Order Summary', payload: orderSummary})
        
    }, [ state.cart ])
    


    

    const addProductCart = (product: ICartProduct) => {
        //solucion 1
        // dispatch({ type: '[Cart] - Add Product', payload: product })

        //solucion 2
        // const productsInCart = state.cart.filter( p => p._id !== product._id && p.size !== product.size );
        // dispatch({ type: '[Cart] - Add Product', payload: { ...productsInCart, product}})

        //solucion 3
        const productInCart = state.cart.some( p => p._id === product._id );
        if ( !productInCart ) return dispatch({ type: '[Cart] - Update Product In Cart', payload: [...state.cart, product ]})

        const productinCartDiffSize = state.cart.some( p => p._id === product._id && p.size === product.size ); 
        if ( !productinCartDiffSize ) return dispatch({ type: '[Cart] - Update Product In Cart', payload: [...state.cart, product ]})
        
        const updatedProducts = state.cart.map( p => {
            if( p._id !== product._id) return p;
            if( p.size !== product.size ) return p;
            
            p.quantity += product.quantity; 
            return p;
        })

        dispatch({ type: '[Cart] - Update Product In Cart', payload: updatedProducts })
    }

    const updateCartQuantity = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Change product quantyti', payload: product })
    }

    const deleteProductInCart = ( product: ICartProduct ) => {
        dispatch({ type: '[Cart] - Remove product In Cart', payload: product });
    }

    return (
        <CartContext.Provider value={{
            ...state,


            addProductCart,
            updateCartQuantity, 
            deleteProductInCart,
        }}>
            { children }
        </CartContext.Provider>
    )
}