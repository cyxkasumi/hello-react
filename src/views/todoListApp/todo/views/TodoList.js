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
                        text={item.text}
                        completed={item.completed}
                        onToggleTodo={() => { onToggleTodo(item.id) }}
                        onRemoveTodo={() => { onRemoveTodo(item.id) }} />
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

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleTodo: id => {
            dispatch(toggleTodo(id))
        },
        onRemoveTodo: id => {
            dispatch(removeTodo(id))
        }
    }
}
// const mapDispatchToProps = {
//     onToggleTodo: toggleTodo,
//     onRemoveTodo: removeTodo
// }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

