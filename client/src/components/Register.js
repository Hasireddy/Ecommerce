import {Typography,Container} from '@mui/material';

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
        </Container>    
        </>
    )
}
export default Register;