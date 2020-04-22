import React, { Component } from 'react'
import CommentInput from './CommontInput'
import CommentList from './CommontList'

class Clock extends Component {
    constructor () {
        super()
        this.state = {
            date: new Date()
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>{
            console.log(111)
            this.setState({date: new Date()})
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render () {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            list: []
        }
    }
    // 组件挂载开始前，组件调用render方法之前
    componentWillMount(){

    }
    // 组件挂载完成，dom元素已经插入页面后
    componentDidMount(){

    }
    // 组件对应的DOM元素从页面中删除之前
    componentWillUnmount(){}
    // 控制组件是否重新渲染  如果返回false不会重新渲染  true 重新渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return true
    }
    // 组件从父组件接收到新的props之前调用
    componentWillReceiveProps(nextProps){

    }
    // 组件重新渲染之前调用
    componentWillUpdate(){}
    // 组件重新渲染完并且把改变更新到真实的DOM视图后
    componentDidUpdate(){}
    onsubmitFun(commentObj){
        console.log(commentObj)
        this.state.list.push(commentObj)
        this.setState({
            list: this.state.list,
            isShowClock: true
        })
    }
    handleShowOrHide(){
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }
    render() {
        return (
            <div className='wrapper'>
                {this.state.isShowClock ? <Clock /> : null }
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
                <CommentInput onSubmit={this.onsubmitFun.bind(this)} />
                <CommentList list={ this.state.list } />
            </div>
        )
    }
}

export default CommentApp