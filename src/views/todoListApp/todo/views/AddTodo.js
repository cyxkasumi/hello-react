import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            val: ''
        }
    }
    onSubmit(event) {
        if (!this.state.val) {
            return
        }
        this.props.onAdd(this.state.val)
        this.setState({
            val: ''
        })
    }
    onInputChange(event) {
        this.setState({
            val: event.target.value
        })
    }
    render() {
        return (
            <div className="add-todo">
                <input className="new-todo" value={this.state.val} onChange={this.onInputChange.bind(this)} />
                <button className="add-btn" onClick={this.onSubmit.bind(this)}>添加</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: text => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)