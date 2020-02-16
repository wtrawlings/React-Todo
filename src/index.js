import React, { Component } from 'react';
import { render } from 'react-dom';
//import App from './App';
import { preToDoList } from './components/TodoComponents/data'
import TodoList from './components/TodoComponents/TodoList'
import ListForm from './components/TodoComponents/TodoForm'
//import { isTemplateElement } from '@babel/types';

//console.log (preToDoList);

class App extends Component {
    constructor(){
        super();
        this.state = {
            preToDoList: preToDoList
            //you can just call it once if you want to...
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
    
    addTask = (task) => {
        const newTask = {
            // eslint-disable-next-line no-undef
            task: task,
            completed: false,
            id: Date.now()
        }
        this.setState({
            preToDoList: [...this.state.preToDoList, newTask]
        })
    }
    

    

    render() {
        console.log(this.state.preToDoList)

        return (
            <div className="App">
                <div className="header">
                    <h1>ToDo List</h1>
                </div>
                <ListForm addTask={this.addTask} />
                <TodoList 
                    preToDoList={this.state.preToDoList} 
                    toggleTask={this.toggleTask} 
                />
            </div>
        );
    }
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);

