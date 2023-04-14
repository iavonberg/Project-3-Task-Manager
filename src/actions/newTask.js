import { NEW_TASK } from "../constants/constants.js";

const newTask = (name, id, status) => {
    return {
        type: NEW_TASK,
        taskTitle: name,
        taskId: id,
        status: status
    };
};

export default newTask;