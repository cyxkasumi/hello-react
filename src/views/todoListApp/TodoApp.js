import React, { Component } from 'react'
import { view as Todos } from './todo'
import { view as Filter } from './filter'

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <Filter />
                <Todos />
            </div>
        )
    }
}
