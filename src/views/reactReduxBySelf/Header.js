import React, { Component } from 'react'
// import { connect } from './component/connect'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Header extends Component {
    // 验证props的类别  打包发布到生产时，可以用bable-react-optimize去掉这个验证，以便优化生产代码
    static propTypes = {
        themeColor: PropTypes.string
    }
    // props 默认值
    static defaultProps = {
        themeColor: '#333'
    }
    render () {
        return (
            <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
        )
    }
}
const mapStateProps = (state)=>{
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateProps)(Header)

export default Header