import { NEW_TASK } from "../constants/constants.js";

const newTask = (name, id, completed) => {
    return {
        type: NEW_TASK,
        task: {
        id: id,
        taskTitle: name,
        completed: completed
        }
    };
};

export default newTask;