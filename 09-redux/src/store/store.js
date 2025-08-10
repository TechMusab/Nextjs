const { createStore } = require("redux");

const initialState = {
    counter: 0,
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            }
        case 'INCREMENT_BY_NUMBER':
            return {
                ...state,
                counter: state.counter + Number(action.payload),
            }
        case 'DECREMENT_BY_NUMBER':
            return {
                ...state,
                counter: state.counter - Number(action.payload),
            }
        case 'RESET':
            return {
                ...state,
                counter: 0,
            }
        default:
            return state
        
    }
}
const store=createStore(counterReducer)

export default store;