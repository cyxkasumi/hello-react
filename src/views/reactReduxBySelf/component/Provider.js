import React, {Component} from 'react'
import PropTypes from 'prop-types'
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }
    static childContextTypes = {  // getChildContext返回的对象
        store: PropTypes.object,
    }
    getChildContext(){ // 设置context  返回的就是子组件中的context  所有子组件都能访问到这个context对象
        return {
            store: this.props.store
        }
    }
    render() {
        console.log(this.props.children, 111)
        return (
            <div>{this.props.children}</div>
        )
    }
}