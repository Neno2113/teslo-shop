import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';

interface Props {

}

const productsInCard = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    editable?: boolean;
}

export const CardList = ({ editable = false }: Props) => {
    return (
        <>
            {
                productsInCard.map( product => (
                    <Grid container spacing={2} sx={{ mb: 1 }} key={ product.slug }>
                        <Grid item xs={3}>
                            <NextLink href="/product/slug" passHref>
                                <Link>
                                    <CardActionArea>
                                        <CardMedia 
                                            image={ `/products/${ product.images[1] }`}
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
                                    ? <ItemCounter />
                                    : <Typography variant='h5'>3 Items</Typography>
                                }
                              

                            </Box>
                        </Grid>
                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                            <Typography variant='subtitle1'>{ `$${product.price}`}</Typography>
                            {
                                editable &&
                                (
                                <Button variant='text' color='secondary'>
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