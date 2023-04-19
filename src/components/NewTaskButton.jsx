import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import newTask from "../actions/newTask";
import { NEW_TASK } from "../reducers/reducer"


const NewTaskButton = props => {
    const dispatch = useDispatch();
    let style = {
        marginLeft: 10,
    }

    return (
        <button style={style} onClick ={ () => dispatch(NEW_TASK(props.name)) }>Add Task</button>
    )
}

export default NewTaskButton;