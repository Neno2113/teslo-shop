import { Box, Button } from '@mui/material';
import { ISize } from '../../interfaces/products';

interface Props{
    sizes: ISize[]
    selectedSize?: ISize
    onSelectedSize: ( size: ISize ) => void;
}

export const ProductSizeSelector = ({ selectedSize, sizes, onSelectedSize }:Props) => {
    return (
        <Box>
            {
                sizes.map( size => (
                    <Button
                        key={ size }
                        onClick={ () =>  onSelectedSize( size ) }
                        size="small"
                        color={ selectedSize === size ? 'primary' : 'info'}
                    >
                        { size }
                    </Button>
                )) 
            }
        </Box>
    )
}
