import React from "react";
import NewTask from "../components/NewTask.jsx";
import TaskView from "../components/TaskView.jsx"


const ToDo = () => {
    return (
        <div>
            <NewTask />
            <TaskView />
        </div>
    );
}

export default ToDo;