import React from 'react'
import { Typography } from '@mui/material';
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';
import { IProduct } from '../../interfaces';

const MenPage = () => {
  const { products, isLoading } = useProducts<IProduct[]>('/products?gender=men');


  return (
      <ShopLayout title={'Teslo-Shop - Hombres'} pageDescription={'Mejores productos para hombres'}   >
        <Typography variant='h1' component='h1'>Hombres</Typography>
        <Typography variant='h2' sx={{ mb: 1}}>Todos los productos - Hombres</Typography>

        {
          isLoading 
            ? <FullScreenLoading />
            :  <ProductList  products={ products } />
        }
      </ShopLayout>
  )
}

export default MenPage