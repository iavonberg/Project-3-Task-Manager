import { NEW_TASK } from "../constants/constants.js";

const newTask = (name, id, completed, checked) => {
    return {
        type: NEW_TASK,
        task: {
        id: id,
        taskTitle: name,
        completed: completed,
        checked: checked
        }
    };
};

export default newTask;