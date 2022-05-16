import React, { ChangeEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import modalStyle from '../style/modal';
import TextField from '@mui/material/TextField';
import TaskModel from '../models/TaskModel';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';

const newId = uuid();
let dt = new Date();
let localDt = dt.toLocaleString('en-US', { timeZone: 'US/Arizona' });

const blankTask: TaskModel = {
    date_created: new Date().toISOString(),
    id: 0,
    task_id: newId,
    title: '',
    category: 'Home',
    user_id: 111,
    complete: false
};

const AddModal = (props: { open: boolean, handleSave: any, handleClose: any }) => {
    const [open] = useState(props.open);
    const [task, setTask] = useState(blankTask);

    // const handleClose = () => {
    //     props.handleClose(false);
    // };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const updatedData = { ...task };
        updatedData.title = value;
        setTask(updatedData);
    };

    const handleSaveTask = () => {
        props.handleSave(task);
    }

    return (
        <Modal
            open={open}
            onClose={props.handleClose}
        >
            <Box sx={modalStyle}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant="h5">What's the new task?</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Task description'
                            multiline
                            rows={4}
                            value={task.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSaveTask}>Save</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
};

export default AddModal;