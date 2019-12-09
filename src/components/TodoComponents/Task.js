import React from 'react';

const Task = props => {
    console.log(props);
    return <div className = "task">{props.task.task}</div>
};

export default Task;