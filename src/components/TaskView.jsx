import React from "react";
import ViewSwitcher from "./ViewSwitcher.jsx"
import NewTask from "./NewTask.jsx"
import TaskCheck from "./TaskCheck.jsx"
import DeleteTask from "./DeleteButton.jsx"

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
        <NewTask />
        <ViewSwitcher />,
        <div style={style}>
        {props.task.map((task) => {
            return (
                <div><TaskCheck id={task.id}/> 
                {task.name} | {task.id}
                <DeleteTask id={task.id} /> </div>

            )
        })}
        </div>
        </div>
);
    }
export default TaskView;