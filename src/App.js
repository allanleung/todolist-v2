import React, {Component} from 'react';
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    };
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        //console.log(newItem);
        const updateItems = [...this.state.items, newItem];
        this.setState({
            items: updateItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    };
    //console.log(updateItems);
    clearList = () => {
        this.setState({
            items: []
        })
    };
    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        })
    };

    handleEdit = id => {
        console.log(id);
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        console.log(selectedItem);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })

    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center"> Todo Input</h3>

                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            editItem={this.state.editItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
