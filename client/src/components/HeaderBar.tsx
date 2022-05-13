import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Handyman from '@mui/icons-material/Handyman';

const HeaderBar = () => {
    return (
        <AppBar position='static' color='primary'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Handyman />
                    <Typography variant='h6'>
                        Get Your Stuff Done
                    </Typography>
                    <Box>
                        <Button color='secondary'>
                            My Lists
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
};

export default HeaderBar;