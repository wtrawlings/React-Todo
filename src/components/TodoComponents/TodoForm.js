import React from 'react';

class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskText: ""
        };
    }

    changeHandler = (event) => {
        this.setState({taskText: event.target.value})
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskText)
        this.setState({taskText: ""});
    }

    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="More ToDO!" name="taskText" value={this.state.taskText} onChange={this.changeHandler}/>
                <button type="submit">Add</button>
            </form>
        )
    }   
}

export default ListForm;