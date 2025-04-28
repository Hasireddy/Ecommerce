import { AppBar,Box ,Toolbar,Button,Typography,IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "../context/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));

function Header()
{
    // const {items} = useCart();
    // const itemsCount = items? 10: 0;

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
                            <Button color="white" size="large" as={Link} to="/login">Login</Button>      
                            <Button color="white" size="large" as={Link} to="/products">Products</Button>  
                            <IconButton aria-label="cart">
                                <StyledBadge badgeContent={10} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>                   
                    </Box>
                    </Toolbar>                              
                </AppBar>
            </Box>
        </>
    )
}

export default Header;