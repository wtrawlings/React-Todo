import React from 'react';
import "./Todo.css";


const Task = props => {
    console.log(props);
    return <div className ={`task${props.task.completed ? " done" : ""} `} 
    onClick = {(e) => props.toggleTask(props.task.id)} >
        {props.task.task}
    </div>
};

export default Task;