import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TaskList from './TaskList';

const Home = () => {
    return (
        <Grid container>
            <Grid item>
                <Button>Test Button</Button>
            </Grid>
            <Grid item>
                <TaskList />
            </Grid>
        </Grid>
    )
};

export default Home;