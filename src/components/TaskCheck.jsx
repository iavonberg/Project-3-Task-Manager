import React from 'react';
import { useDispatch } from 'react-redux';

const TaskCheck = props => {
    const dispatch = useDispatch();

    return (
        <input type="checkbox" checked={props.checked} onChange={() => dispatch({type: "COMPLETE_TASK", completed: false, id: props.id})}></input>
    )
}

export default TaskCheck;