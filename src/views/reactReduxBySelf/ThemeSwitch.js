import React, { Component } from 'react'
import {connect} from "./component/connect";

class ThemeSwitch extends Component {
    changeColorFun(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }
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