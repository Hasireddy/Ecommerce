import { AppBar,Box ,Toolbar,Button,Typography} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import './Header.css';

function Header()
{
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar color={"primary"} className="appbar" position="sticky">
                    <Toolbar>
                    <StoreIcon fontSize="large" edge="start" color="inherit" aria-label="logo" sx={{displax:{xs:"none",md:"flex"}}}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>My Store</Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button color="white" size="large">About</Button>   
                            <Button color="white" size="large">Register</Button>
                            <Button color="white" size="large">Login</Button>                  
                    </Box>
                    </Toolbar>                              
                </AppBar>
            </Box>
        </>
    )
}

export default Header;