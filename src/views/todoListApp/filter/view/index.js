import React from 'react'
import { connect } from "react-redux"
import { setFilter } from '../actions'
import './style.scss'
const fliter = ({ onSetFilter }) => {
    return (
        <ul className="filters">
            <li className="filter">
                <input type="radio" value='ALL' name="filter" onChange={onSetFilter}></input>
                <label>全部</label>
            </li>
            <li className="filter">
                <input type="radio" value='COMPLETED' name="filter" onChange={onSetFilter}></input>
                <label>完成</label>
            </li>
            <li className="filter">
                <input type="radio" value='UNCOMPLETED' name="filter" onChange={onSetFilter}></input>
                <label>待办</label>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetFilter: event => {
            dispatch(setFilter(event.target.value))
        }
    }
}

export default connect(null, mapDispatchToProps)(fliter)


