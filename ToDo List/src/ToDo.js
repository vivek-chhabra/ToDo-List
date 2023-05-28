import React, { Component } from 'react'
import './ToDo.css'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {pos: false}
    }
    handleClick = (evt) => {
        if(this.state.pos === false) {
            this.setState({pos: true})
        } else {
            this.setState({pos: false})
        }
    }
    render() {
        return(
            <div className="ToDo flex">
                 <p onClick={this.handleClick} style={this.state.pos? {textDecoration: 'line-through'} : {textDecoration: 'none'} }> Milk the cat</p>
                 <div className="ToDo-operations flex">
                    <i className='fa-solid fa-edit' onClick={this.handleEdit}></i>
                    <i className='fa-solid fa-trash' onClick={this.handleRemove}></i>
                 </div>
            </div>
        )
    }
}

export default ToDo;