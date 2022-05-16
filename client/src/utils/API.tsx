import Axios from 'axios';
import TaskModel from '../models/TaskModel';

const API = {
    getTasks: () => {
        return Axios.get<Array<TaskModel>>(`/tasks`);
    },
    updateTask: (task: TaskModel) => {
        return Axios.put(`/tasks/${task.task_id}`, task);
    },
    addTask: (task: TaskModel) => {
        return Axios.post(`/tasks/${task.user_id}`, task);
    },
    archiveTask: (task: TaskModel) => {
        return Axios.put(`/tasks/archive/${task.task_id}`);
    }
};

export default API;