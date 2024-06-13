import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
} from '@mui/material';
// menu
import DrawerItem from './DrawerItem';
// rotas
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar) ({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")] : {
        display: "flex",
    },
}));

//rotas
const itemList = [
    {
      text: "Home",
      to: "/"
    },
    {
        text: "Store",
        to: "/store"
    },
    {
        text: "Contact",
        to: "/contact"
    },
    {
        text: "Register",
        to: "/register"
    },
    {
        text: "Login",
        to: "/login"
    }
];


const Navbar = () => {

    return (
        <AppBar
        component="nav"
        position="sticky"
        sx={{
            backgroundColor: 'black',
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component={Link}
                to={'/'}
                sx={{
                    fontSize: '2rem',
                    textDecoration: 'none',
                    color: 'white',
                    cursor: 'pointer'
                }}
                >
                    GoFind
                </Typography>
                <Box sx={{display: { xs: 'block', sm: 'none' } }}>
                    <DrawerItem />
                </Box>
                <ListMenu>
                    {itemList.map( ( item ) => {
                        const { text } = item;
                        return(
                            <ListItem key={text}>
                                <ListItemButton
                                    component={Link}
                                    to={item.to}
                                    sx={{
                                        color: text === "Register" || text === "Login" ? 'black' : '#fff',
                                        backgroundColor: text === "Register" || text === "Login" ? 'white' : 'transparent',
                                        borderRadius: text === "Register" || text === "Login" ? '25px' : 'none',
                                        padding: text === "Register" || text === "Login" ? '8px 30px' : 'none',
                                        "&:hover": {
                                            backgroundColor: text === "Register" || text === "Login" ? '#f0f0f0' : 'transparent',
                                            color: text === "Register" || text === "Login" ? 'black' : '#1e2a5a',
                                        }
                                    }}
                                >
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
