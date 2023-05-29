import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { pos: false, editMode: false, todo: this.props.item, showMsg: false };
    }

    // to toggle between task done or not
    handleClick = (evt) => {
        this.setState({ pos: !this.state.pos });
    };

    // when the task is desabled
    disableMsg = () => {};

    // to remove the task
    handleRemove = (evt) => {
        this.props.handleRemove(this.props.id);
    };

    // to toggle with edit mode
    handleEdit = (evt) => {
        if (this.state.pos == false) {
            this.setState({ editMode: true });
        } else {
            // when the task is desabled
            this.setState({ showMsg: true });
            setTimeout(() => {
                this.setState({ showMsg: false });
            }, 2000);
        }
    };

    // handling the input value
    handleChange = (evt) => {
        this.setState({ todo: evt.target.value });
    };

    // to save the new changes made in the task (todo)
    handleSave = (evt) => {
        evt.preventDefault();
        this.props.handleEdit(this.props.id, this.state.todo);
        this.setState({ editMode: false });
    };

    render() {
        return (
            <div className="ToDo flex" style={this.state.pos ? { backgroundColor: "rgba(186, 106, 255, 0.336)" } : { backgroundColor: "rgba(186, 106, 255, 0.623)" }}>
                <div className="ToDo-flex" style={(this.state.editMode || this.state.showMsg) ? { display: "none" } : { display: "flex" }}>
                    <p onClick={this.handleClick} style={this.state.pos ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
                        {this.props.item}
                    </p>
                    <div className="ToDo-operations flex">
                        <i className="fa-solid fa-edit" onClick={this.handleEdit}></i>
                        <i className="fa-solid fa-trash" onClick={this.handleRemove}></i>
                    </div>
                </div>
                <div className={this.state.showMsg? 'cantEdit zoom' : 'cantEdit'} style={this.state.showMsg? {display: 'flex'} : {display: 'none'}}>
                    <span>Task Can't Be Edited</span>
                </div>
                <div className="ToDo-edit flex" style={this.state.editMode ? { display: "flex" } : { display: "none" }}>
                    <form action="" className="flex" onSubmit={this.handleSave}>
                        <input type="text" onChange={this.handleChange} value={this.state.todo} name="" id="add-todo" />
                        <button>SAVE</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ToDo;
