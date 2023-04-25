import { 
    NEW_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
    SHOW_VIEW
 } from "../constants/constants"
import { combineReducers } from "redux";

// const initialTaskData = [];

const initialTaskData = {task: [],
view: null};

function nextId(tasks) {
    const maxId = tasks.task.reduce((maxId, task) => Math.max(task.id, maxId), 0)
    return maxId +1
}


const taskData = (state = initialTaskData, action) => {
    switch (action.type) {
        case NEW_TASK:
            var stateCopy = {... state};
            stateCopy.task.push({id: nextId(state), name: action.name, completed: false, checked: ""})
            return stateCopy;
        case COMPLETE_TASK:
            var stateCopy = {...state};
            for (let x = 0; x < stateCopy.task.length; x++){
                if (stateCopy.task[x].id == action.id) {
                    stateCopy.task[x].completed = !stateCopy.task[x].completed;
                } else {
                    // do nothing
                }
            }
            return stateCopy;
        case DELETE_TASK:
            var stateCopy = {...state};
            for (let x = 0; x < stateCopy.task.length; x++){
                if (stateCopy.task[x].id == action.id) {
                    stateCopy.task.splice(x, 1);
                }
                else{
                    // do nothing
                }
            }
        case SHOW_VIEW:
            if (action.completed === true){
            var stateCopy = {...state, view: true};
            } if (action.completed === false) {
               var stateCopy = {...state, view: false}; 
            } if(action.completed === null) {
                var stateCopy = {...state, view: null}
            }
            return stateCopy;
        default:
            return state
    }
};

//     }
// }

const taskreducer = combineReducers({
    taskData,
    // getView
})

export default taskreducer;