type TaskModel = {
    id: number,
    task_id: string,
    user_id: number,
    title: string,
    date_created: string,
    complete: boolean,
    category: string
};

export default TaskModel;