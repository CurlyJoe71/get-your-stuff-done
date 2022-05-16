import React, { ChangeEvent, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
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
import API from '../utils/API';
import Divider from '@mui/material/Divider';
import TaskModel from '../models/TaskModel';
import ArchiveModal from './DeleteModal';

const TaskList = (props: { data: Array<TaskModel>, onChange: any }) => {
    const [tasks, setTasks] = useState<TaskModel[]>(props.data);
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    const [archiveModalOpen, setArchiveModalOpen] = useState<boolean>(false);
    const [currTask, setCurrTask] = useState<TaskModel>({
        id: 0,
        task_id: 'id',
        user_id: 0,
        title: '',
        category: '',
        complete: false,
        date_created: ''
    });

    useEffect(() => {
        setTasks(props.data);
    }, [props.data]);

    const handleEditClick = (id: string) => {
        tasks.map(d => {
            if (d.task_id === id) {
                setCurrTask(d);
            };
        });
        setEditModalOpen(true);
    };

    const handleArchiveClick = (id: string) => {
        tasks.map(d => {
            if (d.task_id === id) {
                setCurrTask(d);
            };
        });
        setArchiveModalOpen(true);
    };

    const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        const taskId = event.target.getAttribute('id');
        let updatedData = tasks.map(d => {
            let task = { ...d };

            if (task.task_id === taskId) {
                task.complete = checked;
                API.updateTask(task);
                props.onChange(task);
            };
            return task;
        })
        setTasks(updatedData);
    };

    const handleTitleChange = (value: string) => {
        let task: TaskModel = currTask;
        const newDate = new Date().toISOString();
        task.title = value;
        task.date_created = newDate;
        API.updateTask(task);
        setCurrTask(task);
    };

    const handleArchive = (task: TaskModel) => {
        let updatedTasks = [...tasks];
        const index = updatedTasks.indexOf(task);
        if (index > -1) {
            updatedTasks.splice(index, 1);
        };
        API.archiveTask(task);
        setTasks(updatedTasks);
        setArchiveModalOpen(false);
    };


    return (
        <>
            {editModalOpen ?
                <EditModal
                    open={editModalOpen}
                    data={currTask}
                    handleClose={setEditModalOpen}
                    handleChange={handleTitleChange}
                /> : null
            }

            {archiveModalOpen ?
                <ArchiveModal
                    open={archiveModalOpen}
                    data={currTask}
                    handleArchive={handleArchive}
                    handleClose={() => setArchiveModalOpen(false)}
                /> : null
            }

            <Grid container xl>
                <Paper sx={{ width: 600 }}>
                    <Grid item xs={12}>
                        <List>
                            {tasks.map(t => {
                                return (
                                    <div key={t.task_id}>
                                        <ListItem>
                                            <Grid container direction='row'>
                                                <Grid item xs={2}>
                                                    <Checkbox checked={t.complete} onChange={handleCheckChange} id={t.task_id} />
                                                </Grid>
                                                <Grid item container direction='column' xs={8}>
                                                    <Grid item color={t.complete ? 'text.secondary' : 'inherit'}>
                                                        <Typography variant='body1'>
                                                            {t.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item color={t.complete ? 'text.secondary' : 'inherit'}>
                                                        {/* TODO: Add categorizing feature */}
                                                        {/* <Typography variant='caption'>
                                                        {t.category ? `${t.category} - ` : null}
                                                    </Typography> */}
                                                        <Typography variant='caption'>
                                                            {formatDate(t.date_created)}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item xs={2} >
                                                    <Tooltip title='Edit task'>
                                                        <Button size='small' onClick={() => handleEditClick(t.task_id)}>
                                                            <EditIcon fontSize='small' />
                                                        </Button>
                                                    </Tooltip>
                                                    <Tooltip title='Archive task'>
                                                        <Button size='small' onClick={() => handleArchiveClick(t.task_id)}>
                                                            <DeleteIcon fontSize='small' />
                                                        </Button>
                                                    </Tooltip>
                                                </Grid>
                                            </Grid>
                                        </ListItem>
                                        <Divider />
                                    </div>
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