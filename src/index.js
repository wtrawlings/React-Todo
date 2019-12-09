import React, { Component } from 'react';
import { render } from 'react-dom';
//import App from './App';
import { preToDoList } from './components/TodoComponents/data'
import TodoList from './components/TodoComponents/TodoList'
import "./components/TodoComponents/Todo.css";
//console.log (preToDoList);

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            preToDoList: preToDoList
        };

    }
    render() {
        console.log(this.state.preToDoList)
        return (
            <div className="App">
                <div className="header">
                    <h1>ToDo List</h1>
                </div>
                <TodoList preToDoList={preToDoList}/>
            </div>
        );
    }
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
