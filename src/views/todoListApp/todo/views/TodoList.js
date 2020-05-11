import React from 'react'
import propTypes from 'prop-types'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../action'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
    return (
        <ul>
            {
                todos.map(item => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed} />
                ))
            }
        </ul>
    )
}
TodoList.propTypes = {
    todos: propTypes.array.isRequired
};
const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'ALL':
            return todos
        case 'COMPLETED':
            return todos.filter(item => item.completed)
        case 'UNCOMPLETED':
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupported filter')
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

export default connect(mapStateToProps)(TodoList)

