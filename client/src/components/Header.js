import { AppBar,Container } from "@mui/material";
import StoreIcon from '@mui/icons-material/Store';
import './Header.css';

function Header()
{
    return (
        <div>
            <AppBar color={"success"} className="appbar" position="static">
                <Container maxWidth="xl">
                    <StoreIcon style={{fontSize:"80px"}}/>
                    <h1>Page1</h1>
                    <h1>Page2</h1>
                    <h1>Page3</h1>
                    <h1>Page4</h1>
                </Container>
            </AppBar>
        </div>
    )
}

export default Header;