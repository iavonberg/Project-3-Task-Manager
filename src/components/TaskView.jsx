import React from "react";
import ViewSwitcher from "./ViewSwitcher.jsx"

const TaskView = props => {
    let style = {
        border: '1px solid black',
        width: 600,
        height: 300,
        marginLeft: 200,
        marginTop: -20
    }
    return (
        <div>
        <ViewSwitcher />,
        <div style={style}>

        </div>
        </div>
    )
};

export default TaskView;