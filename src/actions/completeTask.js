import { COMPLETE_TASK } from "../constants/constants.js";

const completeTask = (id, status) => {
    return {
        type: COMPLETE_TASK,
        taskId: id,
        status: status
    };
};

export default completeTask;