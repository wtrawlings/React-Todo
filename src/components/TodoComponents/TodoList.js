// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from "./Task";

const TodoList = props => {
    //console.log(props.preToDoList)
    return (
        <div className ="todo-list">
            {props.preToDoList.map(task => {
                console.log(task);  
                return <Task task={task} key={task.id} 
                toggleTask={props.toggleTask} />
            })
        }
        </div>
    )
}

export default TodoList;