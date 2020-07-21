import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = (
    { 
        description = "",
        note = "",
        amount = 0,
        createdAt = 0
    } = {}
) => {
    return {
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates = {}) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})


// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_DATE"
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

// Expenses Reducer
const expensesReducerDefaultSate = [];

const expensesReducer = (state = expensesReducerDefaultSate, action) => {
    switch(action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        
        case "REMOVE_EXPENSE":
            return (state.filter(({ id }) => {
                if(id === action.id) 
                    return false;
                else 
                    return true;
            }))

        case "EDIT_EXPENSE":
            return (state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else    
                    return expense;
            }))
        default: 
            return state;
    }
}

// Filter Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        
        case "SORT_BY_Amount":
            return {
                ...state,
                sortBy: "amount"
            }

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }

        default: 
            return state;
    }
}

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        }
        if(sortBy === "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);    
})

const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100, createdAt: 100}));
const expenseTwo = store.dispatch(addExpense({description: "Coffee", amount: 300, createdAt: 200}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("ffe"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(200));

const demoStat = {
    expenses: [{
        id: "kladjfio",
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createAt: 0
    }],
    filter: {
        text: "rent",
        sortBy: "amount", //amount or date
        startDate: undefined,
        endDate: undefined
    }
}

// Object spread operator (Need to customize babel by adding a plugin)
// const test = {
//     name: "vishal",
//     age: 21
// }

// console.log({
//     age: 24, // It doesn't override the previous value
//     ...test,
//     age: 22, // Overriding the previous value
//     clg: "manit"
// })