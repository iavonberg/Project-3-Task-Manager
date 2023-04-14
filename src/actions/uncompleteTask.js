import { UNCOMPLETE_TASK } from "../constants/constants.js";

const uncompleteTask = (id, status) => {
    return {
        type: UNCOMPLETE_TASK,
        taskId: id,
        status: status
    };
};

export default uncompleteTask;