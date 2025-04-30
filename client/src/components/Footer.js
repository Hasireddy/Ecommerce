import {AppBar,Box,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() 
{
    return(
        <>     
                 <Box sx={{
                     position: 'fixed',
                     bottom: 0,
                     left: 0,
                     width: '100%', 
                     backgroundColor: '#4caf50', 
                     padding: '1rem',
                     textAlign: 'center',
                     zIndex: 1200,
                    }}>
                    <Typography variant='h6' component="div" sx={{fontWeight:'bold',fontSize:'1.5rem'}}>
                        My Store
                    </Typography>
                    <Typography>
                        &copy,{new Date().getFullYear()} My Store.  All rights reserved.
                    </Typography>
                    <Typography>
                        123 Main Street,Munich,Germany
                    </Typography>
                    <Typography>
                        +11 233 445 5566
                    </Typography>
                    <Typography>
                        mystore@gmail.com
                    </Typography>
                    <Box sx={{marginTop:'1rem'}}>
                        <a href="https://www.instagram.com" targer="_blank" rel="noopener noreferrer">
                            <InstagramIcon sx={{
                                color:'white',
                                marginRight:'10px',
                                transition:'color 0.3s ease',
                                '&hover':{
                                    color:'rgb(0,0,255)'
                                }
                            }}/>
                        </a>

                        <a href="https://www.facebook.com" targer="_blank" rel="noopener noreferrer">
                            <FacebookIcon sx={{
                                color:'white',
                                marginRight:'10px',
                                transition:'color 0.3s ease',
                                '&hover':{
                                    color:'rgb(0,0,255)'
                                }
                            }}/>
                        </a>

                        <a href="https://www.linkedin.com" targer="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx={{
                                color:'white',
                                transition:'color 0.3s ease',
                                '&hover':{
                                    color:'rgb(0,0,255)'
                                }
                            }}/>
                        </a>
                    </Box>
                </Box>
            
        </>
    )
}
export default Footer;