import React, { useState, useRef, useEffect } from "react";
import SetView from "./ViewSwitcher.jsx"
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

    var tasks = props.task.task


    const showView = () => {

        var view = props.task.view


        //     console.log(checked)
        //     return checked
        // }
        
        if(view === true) {
            var filteredView = tasks.filter(task => task.completed === true)
            var view = filteredView.map((task) => {
                return (
                    <div><TaskCheck id={task.id} checked={task.completed}/> 
                    {task.name} | {task.id} 
                    <DeleteTask id={task.id} /> 
                    </div>)
            }
            )}
        if (view === false) {
            var filteredView = tasks.filter(task => task.completed === false)
            var view = filteredView.map((task) => {
                return (
                    <div><TaskCheck id={task.id} checked={task.completed}/> 
                    {task.name} | {task.id} 
                    <DeleteTask id={task.id} /> 
                    </div>)
            })
            }
         if (view === null) {
            var view = tasks.map((task) => {
                return (
                    <div><TaskCheck id={task.id} checked={task.completed}/> 
                    {task.name} | {task.id} 
                    <DeleteTask id={task.id} /> 
                    </div>
                )})
                }
            return view
        }
    
    return (
        <div>
            <NewTask />
            <ul id="viewList">
                <SetView completed={null}  view="All"/>/
                <SetView completed={true} view="Completed"/>/
                <SetView completed={false} view="Incomplete"/>
            </ul>
            <div style={style}>
                {showView()}
            </div>
        </div>
);
    }
export default TaskView;