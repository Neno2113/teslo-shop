import type { NextPage } from 'next'
import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { ProductList } from '../components/products';
import { useProducts } from '../hooks/useProducts';
import { FullScreenLoading } from '../components/ui';
import { IProduct } from '../interfaces/products';



const HomePage: NextPage = () => {


  const { products, isLoading } = useProducts<IProduct[]>('/products');

  
  return (
    <ShopLayout
      title='Teslo-Shop'
      pageDescription='Encuentra los mejor de Teslo aqui'
    >
      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1}}>Todos los productos</Typography>

      {
        isLoading 
          ? <FullScreenLoading />
          :  <ProductList  products={ products } />
      }

    
    </ShopLayout>
  )
}

export default HomePage;
