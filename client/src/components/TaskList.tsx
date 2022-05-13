import React, { ChangeEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import formatDate from '../utils/dateFormatter';

const TaskList = () => {
    const [data, setData] = useState([
        {
            complete: true,
            title: 'Task 1 title/description',
            dateCreated: '2022-05-13T19:00:00.000Z',
            id: '01'
        },
        {
            complete: false,
            title: 'Task 2 title',
            dateCreated: '2022-05-13T18:00:00.000Z',
            id: '02'
        }
    ]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        const checked = event.target.checked;
        const taskId = event.target.getAttribute('id');
        let updatedData = data.map(d => {
            let task = { ...d };

            if (task.id === taskId) {
                task.complete = checked;
            };
            return task;
        })
        setData(updatedData);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Paper>
                    <Grid item xs={12}>
                        <List>
                            {data.map(t => {
                                return (
                                    <ListItem key={t.id}>
                                        <Checkbox checked={t.complete} onChange={handleChange} id={t.id} />
                                        <Grid container direction='column'>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    {t.title}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='caption'>
                                                    {formatDate(t.dateCreated)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                </Paper>
            </Grid>
        </Box>
    )
}

export default TaskList;