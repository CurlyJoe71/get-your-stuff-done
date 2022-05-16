import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TaskList from './TaskList';
import API from '../utils/API';
import TaskModel from '../models/TaskModel';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AddModal from './AddModal';
import ArchiveModal from './DeleteModal';

const Home = () => {
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [completed, setCompleted] = useState<TaskModel[]>([]);
    const [incomplete, setIncomplete] = useState<TaskModel[]>([]);
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const getTasks = async () => {
            const response = await API.getTasks();
            if (response.data) {
                let tasks: Array<TaskModel> = response.data;
                setTasks(tasks);
            }
        }
        try {
            getTasks();
        } catch (e) {
            console.log(e);
        }
    }, []);

    useEffect(() => {
        filterTasks();
    }, [tasks]);

    const updateTasks = (incomingTask: TaskModel) => {
        let elIndex = tasks.findIndex(d => d.task_id === incomingTask.task_id);
        let updatedData = [...tasks];
        updatedData[elIndex] = incomingTask;
        setTasks(updatedData);
    }

    const filterTasks = () => {
        let completeTasks: Array<TaskModel> = [];
        let incompleteTasks: Array<TaskModel> = [];

        tasks.forEach(d => {
            if (d.complete === true) {
                completeTasks.push(d);
            } else {
                incompleteTasks.push(d);
            }
        });
        setCompleted(completeTasks);
        setIncomplete(incompleteTasks);
    };

    const handleSave = (newTask: TaskModel) => {
        let updatedTasks = [...tasks];
        updatedTasks.push(newTask);
        setAddModalOpen(false);
        setTasks(updatedTasks);
        API.addTask(newTask);
    };

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' color='secondary' sx={{ mt: 3 }}>
                Tasks To Be Done
            </Typography>
            <Button onClick={() => { setAddModalOpen(true) }}>
                Create Task
            </Button>
            {addModalOpen ?
                <AddModal
                    open={addModalOpen}
                    handleClose={setAddModalOpen}
                    handleSave={handleSave}
                /> : null
            }

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TaskList data={incomplete} onChange={updateTasks} />
                </Grid>
            </Grid>
            <Typography variant='h4' color='secondary' sx={{ mt: 3 }}>
                Completed Tasks
            </Typography>
            <Grid container>
                <Grid item xs={12}>
                    <TaskList data={completed} onChange={updateTasks} />
                </Grid>
            </Grid>
        </Container>
    )
};

export default Home;