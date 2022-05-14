import React, { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Handyman from '@mui/icons-material/Handyman';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const HeaderBar = () => {
    const [notebooks, setNotebooks] = useState<Array<string>>(['All Tasks', 'Private', 'Home', 'Work', 'Uncategorized']);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='primary'>
                <Toolbar>
                    <Handyman />
                    <Typography variant='h6' sx={{ mr: 2 }}>
                        Get Your Stuff Done
                    </Typography>
                    <Button color='secondary' onClick={handleClick}>
                        My Notebooks
                    </Button>
                    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
                        {notebooks.map((n, i) => {
                            return (
                                <MenuItem key={i}>{n}</MenuItem>
                            );
                        })}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default HeaderBar;