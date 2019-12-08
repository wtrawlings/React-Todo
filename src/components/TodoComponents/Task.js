import React from 'react';

const Task = props => {
    return (
        <div className = "task">
            {props.preToDoList.task}
        </div>
    )
}

export default Task;