import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Link, Typography } from "@mui/material"
import { CardList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"

const SummaryPage = () => {
    return (
        <ShopLayout title={"Resumen de orden"} pageDescription={"Resumen de la orden."} >
            <Typography variant="h1" component="h1">Resumen de la orden.</Typography>
       
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
                                <Button  color="secondary" className="circular-btn" fullWidth>
                                    Confirmar orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage