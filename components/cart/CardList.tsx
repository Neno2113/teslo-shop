import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';
import { useContext } from 'react';
import { CartContext } from '../../context/cart/cartContext';
import { ICartProduct } from '../../interfaces';

interface Props {

}


interface Props {
    editable?: boolean;
}

export const CardList = ({ editable = false }: Props) => {

    const { cart, updateCartQuantity, deleteProductInCart } = useContext(CartContext);


    const onNewQuantityCartValue = (product: ICartProduct, newQuantityValue: number ) => {
        product.quantity = newQuantityValue
        updateCartQuantity( product );
    }
    

    return (
        <>
            {
                cart.map( product => (
                    <Grid container spacing={2} sx={{ mb: 1 }} key={ product.slug + product.size }>
                        <Grid item xs={3}>
                            <NextLink href={`/product/${ product.slug }`} passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia 
                                            image={ `/products/${ product.images }`}
                                            component="img"
                                            sx={{ borderRadius: '5px'}}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>
                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>
                                <Typography variant='body1'>{product.title}</Typography>
                                <Typography variant='body2'>Talla: <strong>M</strong></Typography>

                                {
                                    editable
                                    ? (
                                        <ItemCounter 
                                            currentValue={ product.quantity } 
                                            maxValue={ 10 } 
                                            updateQuantity={ (value) => onNewQuantityCartValue(product, value) }
                                        />
                                    )
                                    : <Typography variant='h5'>{ product.quantity } { product.quantity > 1 ? 'Productos' : 'Producto'}</Typography>
                                }
                              

                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>{ `$${product.price}`}</Typography>
                            {
                                editable &&
                                (
                                <Button 
                                    variant='text' 
                                    color='secondary'
                                    onClick={ () => deleteProductInCart( product ) }    
                                >
                                    Remover
                                </Button>
                                )
                            }
                          
                        </Grid>
                    </Grid>
                ))
            }
        </>
    )
}
