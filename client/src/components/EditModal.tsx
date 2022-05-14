import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import modalStyle from '../style/modal';

const EditModal = (props: { open: boolean, handleClose: any, data: any }) => {
    const [open, setOpen] = useState(props.open);
    const handleClose = () => {
        props.handleClose(false);
    };
    console.log(props.data);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={modalStyle}>
                <Typography variant="h5">Testing Modal</Typography>
            </Box>
        </Modal>
    )
};

export default EditModal;