import React from 'react';
import { render } from 'react-dom';
//import App from './App';
import { preToDoList } from './components/TodoComponents/data'
import TodoList from './components/TodoComponents/TodoList'

console.log (preToDoList);

const App = props => {
        console.log("rendering something from index...");
        return (
            <div className="App">
                <div className="header">
                    <h1>ToDo List</h1>
                </div>
                <TodoList preToDoList={preToDoList}/>
            </div>
        );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
