import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import { CardList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
    return (
        <ShopLayout title={"Resumen de la orden 414117528"} pageDescription={"Resumen de la orden."} >
            <Typography variant="h1" component="h1">Orden ABC01832838.</Typography>
{/* 
            <Chip 
                sx={{ my: 2}}
                label='Pendiente de pago'
                variant='outlined'
                color='error'
                icon={ <CreditCardOffOutlined />}
            /> */}
            <Chip 
                sx={{ my: 2}}
                label='Orden ya pagada'
                variant='outlined'
                color='success'
                icon={ <CreditScoreOutlined />}
            />
       
            <Grid container>
                <Grid item xs={12} sm={7}>
                    {/* CardList */}
                    <CardList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className="summary-card">
                        <CardContent>
                            <Typography variant="h2">Resumen (3 Productos)</Typography>
                            <Divider sx={{ my:1 }} />

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant='subtitle1'>Direccion de entrega</Typography>
                                <NextLink href='/checkout/address' passHref>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography >Anel Dominguez</Typography>
                            <Typography >14th Ave. Unit A</Typography>
                            <Typography >39200, Miami</Typography>
                            <Typography >Miami, Florida</Typography>
                            <Typography >United States</Typography>
                            <Typography >+1 8299436531</Typography>
                            
                            <Divider sx={{ my:1 }} />


                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>
                            </Box>
                            {/* Order Summary */}
                            <OrderSummary />

                            <Box sx={{ mt:3 }}>
                               <h1>Pagar</h1>

                               <Chip 
                                    sx={{ my: 2}}
                                    label='Orden ya pagada'
                                    variant='outlined'
                                    color='success'
                                    icon={ <CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default OrderPage