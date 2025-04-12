import {Grid,Button,Box} from '@mui/material';

export default function ProductCard({product}){
    return(
        <>
            <Box sx={{ display: 'flex' , justifyContent: 'center', width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'}  textAlign={'center'} marginTop={'50px'} marginBottom={'50px'}>
                    <Grid size={6}><img src={product.image} alt={product.title} style={{ height: '200px',width:'40%'}} /></Grid>
                    <Grid size={6}> 
                        <h3>{product.title}</h3>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
                        <Button color="primary" size="large" variant="contained" align="center">Add to cart</Button>  
                    </Grid>
                {/* <li key={product.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}> */} 
                </Grid>
            </Box>
        </>
    )
}