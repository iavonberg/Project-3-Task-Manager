import React, {useState} from "react";
import { useDispatch } from 'react-redux';


const NewTask = props => {
    var style = {
        paddingTop: 50,
        paddingLeft: 300,
    }

    var inputStyle = {
        paddingRight: 150,
    }
    const dispatch = useDispatch();
    const [taskName, setTaskName] = useState('');


    return (
        <div style={style}>
        <input value={taskName} style={inputStyle} type="text" placeholder="Add a new task" onChange={e => setTaskName(e.target.value)} />
        <button onClick ={ () => dispatch({type: "NEW_TASK", id: 2, name: taskName}) }>Add Task</button>
        </div>
    )

}

export default NewTask;