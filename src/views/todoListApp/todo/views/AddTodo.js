import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends Component {
    constructor() {
        super()
    }
    onSubmit(event) {
        const input = this.input
        if (!input.value.trim()) {
            return
        }
        this.props.onAdd(input.value)
        input.value = ''

    }
    refInput(node) {
        this.input = node
    }
    render() {
        return (
            <div className="add-todo">
                <input className="new-todo" ref={this.refInput.bind(this)} />
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