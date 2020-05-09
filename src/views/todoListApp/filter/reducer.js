import { SET_FILTER } from './actionTypes'

export default (state = 'ALL', action) => {
    console.log(state, action)
    switch (action.type) {
        case SET_FILTER:
            return action.filter
        default:
            return state
    }
}