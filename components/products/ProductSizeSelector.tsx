import { Box, Button } from '@mui/material';
import { ISize } from '../../interfaces/products';

interface Props{
    sizes: ISize[]
    selectedSize?: ISize
}

export const ProductSizeSelector = ({ selectedSize, sizes }:Props) => {
    return (
        <Box>
            {
                sizes.map( size => (
                    <Button
                        key={ size }
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
