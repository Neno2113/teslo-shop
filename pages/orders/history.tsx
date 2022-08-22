import NextLink from 'next/link';
import { Chip, Grid, Link, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { ShopLayout } from "../../components/layouts";


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100},
    // { field: 'fullName', headerName: 'Nombre completo', width: 300},
    { field: 'fullName', headerName: 'Nombre completo', width: 300},
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra si la orden esta pagada o no',
        width: 150,
        renderCell: (params: GridValueGetterParams) => {
            return (
                params.row.paid
                    ? <Chip color='success' label='Pagada' variant='outlined' />
                    : <Chip color='error' label='No Pagada' variant='outlined' />
            )
        }
    },
    {
        field: 'orden',
        headerName: 'Orden',
        description: 'Numero de orden.',
        sortable: false,
        width: 150,
        renderCell: ( params: GridValueGetterParams ) => {
            return (
                params.row.id
                    && (
                        <NextLink href={`/orders/${ params.row.id }`} passHref>
                            <Link underline='always'>
                                Orden No. { params.row.id}
                            </Link>
                        </NextLink>
                    )
            )
        }
    }
]; 

const rows = [
    { id: 1, paid: true, fullName: 'Anel Dominguez'},
    { id: 2, paid: false, fullName: 'Gabriel Garcia'},
    { id: 3, paid: true, fullName: 'Massiel Dionicio'},
    { id: 4, paid: false, fullName: 'Emely Dominguez'},
    { id: 5, paid: true, fullName: 'Ana Garcia'},
    { id: 6, paid: true, fullName: 'Solange Dominguez'},
]



const HistoryPage = () => {
    return (
        <ShopLayout title={"Historial de ordenes"} pageDescription={"Historial de ordenes del cliente"} >
            <Typography variant='h1' component='h1'>Historial de Ordenes</Typography>
            <Grid container  sx={{ height: 650,  width: '100%'}}>
                <DataGrid 
                    rows={ rows }
                    columns={ columns }
                    pageSize={ 10 }
                    rowsPerPageOptions={ [10] }
                />
            </Grid>

        </ShopLayout>
    )
}

export default HistoryPage;