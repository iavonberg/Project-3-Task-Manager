import { DELETE_TASK } from "../constants/constants.js";

const deleteTask = (id) =>
{
    return {
        type: DELETE_TASK,
        taskId: id,
    };
};

export default deleteTask;