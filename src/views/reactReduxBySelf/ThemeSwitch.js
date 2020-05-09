import React, { Component } from 'react'
// import {connect} from "./component/connect";
import { connect } from 'react-redux'

class ThemeSwitch extends Component {
    changeColorFun(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }
    // bind函数的另一种表现 this.fn = ::this.fn  ::是bind操作符
    render () {
        return (
            <div>
                <button  style={{color: this.props.themeColor}} onClick={this.changeColorFun.bind(this, 'red')}>Red</button>
                <button  style={{color: this.props.themeColor}} onClick={this.changeColorFun.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}
const mapStateProps = (state)=>{
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        onSwitchColor: (color)=>{
            dispatch({
                type: 'CHANGE_COLOR',
                themeColor: color
            })
        }
    }
}

ThemeSwitch = connect(mapStateProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch