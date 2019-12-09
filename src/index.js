import React, { Component } from 'react';
import { render } from 'react-dom';
//import App from './App';
import { preToDoList } from './components/TodoComponents/data'
import TodoList from './components/TodoComponents/TodoList'
//import { isTemplateElement } from '@babel/types';

//console.log (preToDoList);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            preToDoList: preToDoList
        };
    }

    toggleTask = taskId => {
        //console.log("GOT IT", taskId)
        this.setState({ preToDoList: this.state.preToDoList.map(task => {
            if (taskId === task.id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        })})
    };
    

    render() {
        console.log(this.state.preToDoList)

        return (
            <div className="App">
                <div className="header">
                    <h1>ToDo List</h1>
                </div>
                <TodoList preToDoList={this.state.preToDoList} 
                toggleTask={this.toggleTask} />
            </div>
        );
    }
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

