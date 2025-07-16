import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <AppBar position="box" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 ,
             background: 'linear-gradient(90deg, #081342, #102583, #1530A8)'
            }}>
            <Toolbar>
               
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
                </Typography>
                

              
            </Toolbar>
        </AppBar>
    );
};

export default Header;
