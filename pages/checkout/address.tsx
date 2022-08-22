import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts';

const AddressPage = () => {
    return (
        <ShopLayout title={'Checkout'} pageDescription={'Confirmar direccion de destino.'} >
            <Typography variant='h1' component='h1'>Direccion</Typography>

            <Grid container spacing={ 2 } sx={{mt:2}}>
                <Grid item xs={12} sm={6} >
                    <TextField label='Nombre' variant='filled' fullWidth/>
                </Grid>      
                <Grid item xs={12} sm={6} >
                    <TextField label='Apellidos' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Direccion' variant='filled' fullWidth/>
                </Grid>      
                <Grid item xs={12} sm={6} >
                    <TextField label='Direccion 2 (Opcional)' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <TextField label='Codigo Postal' variant='filled' fullWidth/>
                </Grid>      
                <Grid item xs={12} sm={6} >
                    <TextField label='Ciudad' variant='filled' fullWidth/>
                </Grid>
                <Grid item xs={12} sm={6} >
                    <FormControl fullWidth >
                        <Select 
                            variant='filled'
                            label='Pais'
                            value={1}
                        >
                            <MenuItem value={1}>RD</MenuItem>
                            <MenuItem value={2}>PR</MenuItem>
                            <MenuItem value={3}>US</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>      
                <Grid item xs={12} sm={6} >
                    <TextField label='Telefono' variant='filled' fullWidth/>
                </Grid>
            </Grid>

            <Box sx={{ mt:5 }} display="flex" justifyContent="center">
                <Button color="secondary">
                    Revisar Pedido
                </Button>
            </Box>

        </ShopLayout>
    )
}

export default AddressPage