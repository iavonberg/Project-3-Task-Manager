import { COMPLETE_TASK } from "../constants/constants.js";

const completeTask = (id, completed) => {
    return {
        type: COMPLETE_TASK,
        id: id,
        completed: completed
    };
};

export default completeTask;