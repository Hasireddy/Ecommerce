import { AppBar,Box ,Toolbar,Button,Typography,IconButton} from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import { palette } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

function Header()
{
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar color={"success"} className="appbar" position="sticky">
                    <Toolbar>
                    {/* <StoreIcon fontSize="large" edge="start" color="inherit" aria-label="logo" sx={{display:{xs:"none",md:"flex"}}}/> */}
                    <IconButton color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>My Store</Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Button color="white" size="large">About</Button>   
                            <Button color="white" size="large">Register</Button>
                            <Button color="white" size="large">Login</Button>      
                            <Button color="white" size="large">Products</Button>              
                    </Box>
                    </Toolbar>                              
                </AppBar>
            </Box>
        </>
    )
}

export default Header;