import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import modalStyle from '../style/modal';
import TaskModel from '../models/TaskModel';
import Button from '@mui/material/Button';

const ArchiveModal = (props: { open: boolean, handleArchive: any, handleClose: any, data: TaskModel }) => {
    const [open] = useState(props.open);

    const handleClose = () => {
        props.handleClose();
    };

    const handleArchiveTask = () => {
        props.handleArchive(props.data);
    }

    return (
        <Modal
            open={open}
            onClose={props.handleClose}
        >
            <Box sx={modalStyle}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant="h5">Archive this task?</Typography>
                    </Grid>
                    <Grid item>
                        <Button color='warning' onClick={handleArchiveTask}>Archive</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleClose}>Never mind</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
};

export default ArchiveModal;