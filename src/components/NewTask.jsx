import React from "react";
import NewTaskButton from "./NewTaskButton.jsx"

const NewTask = props => {
    var style = {
        paddingTop: 50,
        paddingLeft: 300,
    }

    var inputStyle = {
        paddingRight: 150,
    }


    return (
        <div style={style}>
        <input style={inputStyle} type="text" placeholder="Add a new task" />
        <NewTaskButton name="state.input.value" id="1" status="incomplete" />
        </div>
    )

}

export default NewTask;