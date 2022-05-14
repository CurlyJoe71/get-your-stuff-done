import React, { ChangeEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import modalStyle from '../style/modal';
import TextField from '@mui/material/TextField';

const EditModal = (props: { open: boolean, handleChange: any, handleClose: any, data: { title: string, complete: boolean, dateCreated: string, id: string, category: string } | any }) => {
    const [open, setOpen] = useState(props.open);
    const [data, setData] = useState(props.data);
    const handleClose = () => {
        props.handleClose(false);
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const updatedData = { ...data }.title = value;
        setData(updatedData);
        props.handleChange(value);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={modalStyle}>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <Typography variant="h5">Edit task...</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label='Task description'
                            multiline
                            rows={4}
                            value={data.title}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
};

export default EditModal;