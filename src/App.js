import React, { Component } from 'react';
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";

class App extends Component {
    render() {
        return (
            <div>
                hello from app.js
                <TodoItem/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
