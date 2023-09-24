import React, { Component } from "react";
import axios from 'axios'

class ListTodos extends Component {
    state = {
        todos: []
    };
    componentDidMount() {
        this.getTodos();
    }
    getTodos() {
        axios
            .get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                {this.state.todos.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>

        )
    }
}

export default ListTodos;