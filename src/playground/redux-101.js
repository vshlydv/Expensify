import { createStore } from "redux";

// Action generators
const increamentCount = ({ increamentBy = 1} = {}) => ({
    type: "INCREAMENT",
    increamentBy
})

const decreamentCount = ({ decreamentBy = 1} = {}) => ({
    type: "DECREAMENT",
    decreamentBy
})

const setCount = ({ count = 0} = {}) => ({
    type: "SET",
    count
})

// Reducers
// 1. They must be pure functions.
// 2. Never change state and action passed in reducer

const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case "INCREAMENT":
            return {
                count: state.count + action.increamentBy
            };
            
        case "DECREAMENT":
            return {
                count: state.count - action.decreamentBy
            };

        case "RESET":
            return {
                count: 0
            };
            
        case "SET":
            return {
                count: action.count
            };
        default:
            return {
                count: 0
            };
    }
}

const store = createStore(countReducer);

//Actions - INCREAMENT, DECREAMENT & RESET

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increamentCount());

store.dispatch(increamentCount({ increamentBy: 5 }));

//Action
// store.dispatch({
//     type: "RESET"
// });

store.dispatch(decreamentCount());

store.dispatch(decreamentCount({ decreamentBy: 5 }));


store.dispatch(setCount({ count: 101 }));