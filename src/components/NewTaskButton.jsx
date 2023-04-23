import React, { useState } from "react";
import { useDispatch as dispatch } from 'react-redux';



const NewTaskButton = props => {
    let style = {
        marginLeft: 10,
    }
    let userInput = document.getElementById('userInput').value;

    return (
        <div>
        <button style={style} onClick ={ () => dispatch({type: "NEW_TASK", id: 2, name: {userInput}}) }>Add Task</button>
        </div>
    )
}

export default NewTaskButton;