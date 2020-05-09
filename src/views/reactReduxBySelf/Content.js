import React, {Component} from 'react'
import ThemeSwitch from './ThemeSwitch'
import PropTypes from 'prop-types'
// import { connect } from './component/connect'
import { connect } from 'react-redux'
class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return {
        themeColor: state.themeColor
    }
}
Content = connect(mapStateProps)(Content)
export default Content