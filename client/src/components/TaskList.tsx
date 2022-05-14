import React, { ChangeEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import formatDate from '../utils/dateFormatter';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const TaskList = () => {
    const [data, setData] = useState([
        {
            complete: true,
            title: 'Task 1 title/description extra long title description to see what will happen',
            dateCreated: '2022-05-13T19:00:00.000Z',
            id: '01',
            category: 'Home'
        },
        {
            complete: false,
            title: 'Task 2 title',
            dateCreated: '2022-05-13T18:00:00.000Z',
            id: '02',
            category: null
        }
    ]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        // <Box sx={{ flexGrow: 1 }}>
        <Grid container xl>
            <Paper sx={{ width: 500 }}>
                <Grid item xs={12}>
                    <List>
                        {data.map(t => {
                            return (
                                <ListItem key={t.id}>
                                    <Grid container direction='row'>

                                        <Grid item xs={2}>
                                            <Checkbox checked={t.complete} onChange={handleChange} id={t.id} />
                                        </Grid>

                                        <Grid item container direction='column' xs={8}>
                                            <Grid item>
                                                <Typography variant='body1'>
                                                    {t.title}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant='caption'>
                                                    {t.category ? `${t.category} - ` : null}
                                                </Typography>
                                                <Typography variant='caption'>
                                                    {formatDate(t.dateCreated)}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid item xs={2} display='flex' justifyContent='space-evenly'>
                                            <Tooltip title='Edit task'>
                                                <EditIcon fontSize='small' />
                                            </Tooltip>
                                            <Tooltip title='Delete task'>
                                                <DeleteIcon fontSize='small' />
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Paper>
        </Grid>
        // </Box>
    )
}

export default TaskList;