import {Typography,Box,Button,Container} from '@mui/material';
import cover from '../Assets/landing2.jpg'

function Home(){
    return(
        <>
        <Box sx={{backgroundImage:`url(${cover})`}}>
         <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',minHeight:'100vh',margin:'auto',textAlign:'center',justifyContent:'center',maxWidth:'100%'}}>
            <Box sx={{marginTop:'6rem',padding:'1rem',maxWidth:'100%',overflow:'hidden'}}>
                <Typography sx={{
                    fontSize:'3rem',
                    textAlign:'center',
                    marginBottom:'2rem',
                    '@media(max-width:442px)':{
                        fontSize:'1.5rem'
                    }
                }}>
                    Welcome to the Store
                </Typography>
                <Typography sx={{
                    fontSize:'2rem',
                    textAlign:'center',
                    marginBottom:'1rem',
                    '@media(max-width:442px)':{
                        fontSize:'1rem'
                    }
                }}>
                    You can start shopping by clicking the button below !
                </Typography>
               
                <Button sx={{
                        backgroundColor:'green',
                        color:'white',
                        width:'15rem',
                        margin:'3rem',
                        transition:'transform 0.3s',
                        '&hover':{
                            transform:'scale(1.05',
                            backgroundImage:'linear-gradient(to bottom,#003eff,#006ef'
                        },
                    }}>
                        Shop
                </Button> 
                <Box>

                </Box>
            </Box>  
        </Container> 
        </Box>
        </>
    )
}
export default Home;