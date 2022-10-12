import React from 'react'
import { Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../components/products'
import { FullScreenLoading } from '../../components/ui'
import { useProducts } from '../../hooks'
import { IProduct } from '../../interfaces'

const KidsPage = () => {

  const { products, isLoading } = useProducts<IProduct[]>('/products?gender=kid');


  return (
      <ShopLayout title={'Teslo-Shop - Ninos'} pageDescription={'Mejores productos para ninos'}   >
        <Typography variant='h1' component='h1'>Niños</Typography>
        <Typography variant='h2' sx={{ mb: 1}}>Todos los productos - Niños</Typography>

        {
          isLoading 
            ? <FullScreenLoading />
            :  <ProductList  products={ products } />
        }
      </ShopLayout>
  )
}

export default KidsPage