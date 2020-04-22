import React, {Component} from 'react'
import PropTypes from 'prop-types'

// connect接受一个mapStateToProps 返回一个函数
// mapStateToProps 告知props如何取值
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor(){
            super()
            this.state = {
                allProps: {}
            }
        }
        componentWillMount(){
            const { store } = this.context
            this._updateProps()
            store.subscribe(()=> this._updateProps())
        }
        // 更改组件中的颜色
        _updateProps(){
            const { store } = this.context
            let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {}
            let dispatch = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}

            this.setState({
                allProps: {
                    ...stateProps,
                    ...dispatch,
                    // 为了让返回的组件和被包装的组件使用参数一致  整合普通的 props 和从 state 生成的 props
                    ...this.props
                }
            })
        }
        render() {
            const { store } = this.context
            // {...this.state.allProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...this.state.allProps} />
        }
    }
    return  Connect
}