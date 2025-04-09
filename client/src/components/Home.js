import {Typography,Box} from '@mui/material';

function Home(){
    return(
        <>
            <Box sx={{marginTop:'6rem',padding:'1rem',maxWidth:'100%',overflow:'hidden'}}>
                <Typography sx={{
                    fontSize:'3rem',
                    textAlign:'center',
                    marginBottom:'2rem'
                }}>
                    Welcome to the Store
                </Typography>
            </Box>   
        </>
    )
}
export default Home;