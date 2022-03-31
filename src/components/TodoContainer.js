import { findAllByDisplayValue } from "@testing-library/react"
import React from "react"
class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title:
                "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    render() {
        return (
            <ul>
                {this.state.todos.map(todo => (
                    <li>{todo.title}</li>
                ))}
            </ul>
        );
        <React.Fragment>
            <h1>Hello from Create React</h1>
            <p>I am in a React Component!</p>
            </React.Fragment>
    }
}
export default TodoContainer