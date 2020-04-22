import React, { Component } from 'react'
import { connect } from './component/connect'
import PropTypes from 'prop-types'

class Header extends Component {
    // 验证props的类别
    static propTypes = {
        themeColor: PropTypes.string
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