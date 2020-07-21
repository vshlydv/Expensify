// Expenses Reducer
const expensesReducerDefaultSate = [];

export default (state = expensesReducerDefaultSate, action) => {
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