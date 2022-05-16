import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Handyman from '@mui/icons-material/Handyman';

const HeaderBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Typography variant='h6' sx={{ mr: 2 }}>
                        Get Your Stuff Done
                    </Typography>
                    {/* <Button color='secondary' onClick={handleClick}>
                        Create Task
                    </Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default HeaderBar;