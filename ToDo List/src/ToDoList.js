import React, { Component } from "react";
import "./ToDoList.css";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
        };
    }

    handleSubmit = (newItem) => {
        let newItm = { todo: newItem, key: crypto.randomUUID() };
        this.setState((curState) => ({
            todoList: [...curState.todoList, newItm],
        }));
    };

    handleEdit = (id, newItem) => {
        let updatedTodos = this.state.todoList.map((ele) => {
            if (id === ele.key) {
                return { todo: newItem, key: id };
            }
            return ele;
        });
        this.setState({todoList: updatedTodos})
    };

    handleRemove = (id) => {
        this.setState((curState) => ({
            todoList: curState.todoList.filter((ele) => ele.key != id),
        }));
    };

    render() {
        return (
            <div className="ToDoList flex-column">
                <div className="ToDoList-head flex-column">
                    <h1>ToDo List!</h1>
                    <p>A Simple ToDo List React App.</p>
                </div>
                <div className="list flex-column">
                    {this.state.todoList.map((ele) => (
                        <ToDo item={ele.todo} key={ele.key} id={ele.key} handleEdit={this.handleEdit} handleRemove={this.handleRemove} />
                    ))}
                </div>
                <NewToDoForm handleSubmit={this.handleSubmit} key={crypto.randomUUID()} />
            </div>
        );
    }
}

export default ToDoList;
