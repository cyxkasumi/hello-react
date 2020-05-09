import { createStore, combineReducers } from 'redux'
import { reducer as todoReducer } from './todo'
import { reducer as filterReducer } from './filter'

// 合并reducer  传入的state会被拆开处理
const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

export default createStore(reducer, {})