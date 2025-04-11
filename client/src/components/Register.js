import {Typography,Container,Box,TextField} from '@mui/material';

function Register(){
    return(
        <>
         <Container sx={{display:'flex',flexDirection:'column',alignItems:'center',minHeight:'100vh',margin:'auto',textAlign:'center',justifyContent:'center'}}>
            <Typography sx={{
                fontSize:'3rem',
                textAlign:'center',
                marginBottom:'2rem'
            }}>
                Register
            </Typography>
                        <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    />
                    <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    slotProps={{
                        input: {
                        readOnly: true,
                        },
                    }}
                    />
                    <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                    }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    />
                </div>
                </Box>
        </Container>    
        </>
    )
}
export default Register;