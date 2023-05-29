import React, { Component } from 'react'
import './NewToDoForm.css'

class NewToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }
    handleChange = (evt) => {
        this.setState({todo: evt.target.value})
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.handleSubmit(this.state.todo)
    }
    render() {
        return(
            <div className="NewToDoForm flex-column">
                <label htmlFor="add-todo">New ToDo . . .</label>
                <div className="NewToDoForm-add-todo flex">
                    <form action="" className='flex' onSubmit={this.handleSubmit}> 
                        <input type="text" placeholder='Add . . .' onChange={this.handleChange} required value={this.state.todo} name="" id="add-todo" />
                        <button>ADD TODO</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewToDoForm;