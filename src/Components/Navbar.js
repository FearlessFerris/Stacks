// Navbar Component Implementation 


// Dependencies 
import React, { useState } from 'react';


// CSS Dependencies 
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


// Components & Necessary Files 


// Navbar Component 
function Navbar() {
    
    const [ anchorEl, setAnchorEl ] = useState( null );

    const handleClick = ( e ) => {
        setAnchorEl( e.currentTarget );
    }

    const handleClose = () => {
        setAnchorEl( null );
    }

    return (
        <div className='navbar-container'>
            <AppBar
                position='fixed'
                sx={{
                    backgroundColor: '#121212',
                    height: '4rem'
                }}
            >
                <Toolbar>
                    <IconButton 
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        onClick={handleClick}
                        sx = {{
                            marginLeft: '1rem'
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h4' 
                        sx={{ 
                            color: '#00695f',
                            flexGrow: 1,
                            marginLeft: '1rem'
                        }}
                    >
                        Stacks
                    </Typography>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{ 
                    '& .MuiMenuItem-root': {
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#00695f',
                        color: '#212121',
                        '&:hover': {
                            backgroundColor: '#212121',
                            color: '#00695f',
                        }
                    }
                }}
            >   
                <MenuItem> Home </MenuItem>
                <MenuItem> Create </MenuItem>
                <MenuItem> Login </MenuItem> 

            </Menu>
        </div>
    );
}

export default Navbar;