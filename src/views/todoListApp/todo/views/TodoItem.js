import React from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { toggleTodo, removeTodo } from '../action'


const TodoItem = ({ onToggleTodo, onRemoveTodo, completed, text }) => (
    <li className='todo-item' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <input className='toggle' type='checkbox' checked={completed ? 'checked' : ''} readOnly onClick={onToggleTodo}></input>
        <label>{text}</label>
        <button className='remove' onClick={onRemoveTodo}>x</button>
    </li>
)
TodoItem.propTypes = {
    id: propTypes.number,
    completed: propTypes.bool.isRequired,
    text: propTypes.string.isRequired
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps;
    return {
        onToggleTodo: () => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: () => {
            dispatch(removeTodo(id))
        }
    }
}
export default connect(null, mapDispatchToProps)(TodoItem)