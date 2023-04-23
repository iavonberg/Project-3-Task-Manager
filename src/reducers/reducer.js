import { 
    NEW_TASK,
    COMPLETE_TASK,
    DELETE_TASK } from "../constants/constants"
import { combineReducers } from "redux";


const initialTaskData = [];
function nextId(tasks) {
    const maxId = tasks.reduce((maxId, task) => Math.max(task.id, maxId), 0)
    return maxId +1
}


const taskData = (state = initialTaskData, action) => {
    switch (action.type) {
        case NEW_TASK:
            var stateCopy = [];
            state.forEach(x => {
                stateCopy.push(x)
            });
            stateCopy.push({id: nextId(state), name: action.name, completed: false})
            return stateCopy;
        case COMPLETE_TASK:
            var stateCopy = [...state];
            for (let x = 0; x < stateCopy.length; x++){
                if (stateCopy[x].id == action.id) {
                    stateCopy[x].completed = !stateCopy[x].completed;
                } else {
                    // do nothing
                }
            }
            return stateCopy;
        case DELETE_TASK:
            var stateCopy = [...state];
            for (let x = 0; x < stateCopy.length; x++){
                if (stateCopy[x].id == action.id) {
                    stateCopy.splice(x, 1);
                }
                else{
                    // do nothing
                }
            }
            return stateCopy;
        default:
            return state
    }
};


const taskreducer = combineReducers({
    taskData
})

export default taskreducer;