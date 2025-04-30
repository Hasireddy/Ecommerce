import {Typography,Grid,Box,Button,TextField} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Register(){
    return(
    <>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent={'center'} sx={{margin:'12rem'}}>
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
                            Register
                        </Typography>
                    </Grid>
                    <Grid size={8}>
                            <TextField
                            required
                            id="outlined-required"
                            label="Firstname"
                            defaultValue="First Name"
                            />
                    </Grid>

                    <Grid size={8}>
                            <TextField
                            required
                            id="outlined-required"
                            label="Lastname"
                            defaultValue="Last Name"
                            />
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
                <Button color="primary" size="large" variant="contained" align="center">Submit</Button> 
                    <Typography sx={{
                    fontSize:'1rem',
                    textAlign:'center',
                    marginBottom:'2rem'
                }}>
                    Already registered?
                </Typography>
                <Button color="primary" size="large" variant="contained" align="center" as={Link} to="/login">Login</Button>  
        </Box>
        </Grid>    
    </>
    )
}
