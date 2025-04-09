import {AppBar,Box,Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() 
{
    return(
        <>     
            <AppBar color={"success"} className="appbar" position="sticky">
                 <Box sx={{
                    textAlign:'center',
                    padding:'1rem',
                    lineHeight:'3rem',
                    }}>
                    <Typography variant='h6' component="div" sx={{fontWeight:'bold',fontSize:'1.5rem'}}>
                        My Company
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
             </AppBar>
            
        </>
    )
}
export default Footer;