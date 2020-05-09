import React from 'react'
import propTypes from 'prop-types'


const TodoItem = ({ onToggle, onRemove, completed, text }) => (
    <li className='todo-item' style={{ textDecoration: completed ? 'line-through' : 'node' }}>
        <input className='toggle' type='checkbox' checked={completed ? 'checked' : ''} readOnly onClick={onToggle}></input>
        <label>{text}</label>
        <button className='remove' onClick={onRemove}>x</button>
    </li>
)
TodoItem.propTypes = {
    onToggle: propTypes.func,
    onRemove: propTypes.func.isRequired,
    completed: propTypes.bool.isRequired,
    text: propTypes.string.isRequired
}
export default TodoItem