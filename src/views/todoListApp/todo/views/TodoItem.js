import React from 'react'
import propTypes from 'prop-types'


const TodoItem = ({ onToggleTodo, onRemoveTodo, completed, text }) => (
    <li className='todo-item' style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        <input className='toggle' type='checkbox' checked={completed ? 'checked' : ''} readOnly onClick={onToggleTodo}></input>
        <label>{text}</label>
        <button className='remove' onClick={onRemoveTodo}>x</button>
    </li>
)
TodoItem.propTypes = {
    onToggleTodo: propTypes.func.isRequired,
    onRemoveTodo: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
    text: propTypes.string.isRequired
}
export default TodoItem