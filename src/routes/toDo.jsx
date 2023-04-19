import React from "react";
import TaskView from "../components/TaskView.jsx"
import TaskContainer from "../containers/TaskContainer";


const ToDo = () => {
    return (
        <div>
            <TaskContainer />
            <TaskView />
        </div>
    );
}

export default ToDo;