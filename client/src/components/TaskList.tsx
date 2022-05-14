import React, { ChangeEvent, useRef, useState, MouseEventHandler, MouseEvent } from 'react';
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
import Button from '@mui/material/Button';
import EditModal from './EditModal';

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
            category: ''
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [currTask, setCurrTask] = useState({ title: '', category: '', complete: false, dateCreated: '', id: '' });

    const handleEditClick = (id: string) => {
        console.log(id);
        console.log('clicked handlemodal open');
        data.map(d => {
            if (d.id === id) {
                setCurrTask(d);
            };
        });
        setModalOpen(true);
    };

    const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    };

    const handleTitleChange = (value: string) => {
        let task = currTask;
        const newDate = new Date().toISOString();
        task.title = value;
        task.dateCreated = newDate;
        setCurrTask(task);
    };

    return (
        <>
            {modalOpen ?
                <EditModal
                    open={modalOpen}
                    handleClose={setModalOpen}
                    data={currTask}
                    handleChange={handleTitleChange}
                /> : null
            }
            <Grid container xl>
                <Paper sx={{ width: 500 }}>
                    <Grid item xs={12}>
                        <List>
                            {data.map(t => {
                                return (
                                    <ListItem key={t.id}>
                                        <Grid container direction='row'>
                                            <Grid item xs={2}>
                                                <Checkbox checked={t.complete} onChange={handleCheckChange} id={t.id} />
                                            </Grid>
                                            <Grid item container direction='column' xs={8}>
                                                <Grid item color={t.complete ? 'text.secondary' : 'inherit'}>
                                                    <Typography variant='body1'>
                                                        {t.title}
                                                    </Typography>
                                                </Grid>
                                                <Grid item color={t.complete ? 'text.secondary' : 'inherit'}>
                                                    <Typography variant='caption'>
                                                        {t.category ? `${t.category} - ` : null}
                                                    </Typography>
                                                    <Typography variant='caption'>
                                                        {formatDate(t.dateCreated)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={2} >
                                                <Tooltip title='Edit task'>
                                                    <Button size='small' onClick={() => handleEditClick(t.id)}>
                                                        <EditIcon fontSize='small' />
                                                    </Button>
                                                </Tooltip>
                                                <Tooltip title='Delete task'>
                                                    <Button size='small'>
                                                        <DeleteIcon fontSize='small' />
                                                    </Button>
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
        </>
    )
}

export default TaskList;