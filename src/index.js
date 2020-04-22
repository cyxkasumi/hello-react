import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import PropsTypes from 'prop-types'
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// react学习  CommentApp
// import CommentApp from './views/comment/CommentApp'
// ReactDOM.render(
//     <CommentApp/>,
//     document.getElementById('root')
// )

// 自己手动写react-redux
import { Provider } from './views/reactReduxBySelf/component/Provider'

import Header from './views/reactReduxBySelf/Header'
import Content from './views/reactReduxBySelf/Content'
function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化state
    return { getState, dispatch, subscribe }
}
const themeReducer = (state, action) =>{
    if(!state) return {
        themeColor: 'red'
    }
    switch (action.type){
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            }
        default:
            return state
    }
}
const store = createStore(themeReducer)


class Index extends Component {
    render () {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
)
