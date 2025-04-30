import {Typography,Grid,Box,TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Login()
{
    return(
        <>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'} sx={{margin:'15rem'}}>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                    <div>
                        <Grid size={8}>
                            <Typography sx={{
                                fontSize:'3rem',
                                textAlign:'center',
                                marginBottom:'2rem',
                                color:'skyblue',
                            }}>
                                Login
                            </Typography>
                        </Grid>
                        
                        <Grid size={8}>
                                <TextField
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue="Emailaddress"
                                />
                        </Grid>

                        <Grid size={8}>
                                <TextField
                                required
                                id="outlined-required"
                                label="Password"
                                type="password"
                                defaultValue="Password"
                                />
                        </Grid>

                        <Grid size={8}>
                                <TextField
                                required
                                id="outlined-required"
                                label="Confirm Password"
                                type="password"
                                defaultValue="Password"
                                />
                        </Grid>
                    </div>
                    <Button color="primary" size="large" variant="contained" sx={{textAlign:'center'}}>Submit</Button> 
                        <Typography sx={{
                        fontSize:'1rem',
                        textAlign:'center',
                        marginBottom:'2rem'
                        }}>
                            Not yet registered? Register here
                        </Typography>
                    <Button color="primary" size="large" variant="contained" sx={{textAlign:'center'}} as={Link} to="/register">Register</Button>  
        </Box>
        </Grid>    
        </>
    )
}