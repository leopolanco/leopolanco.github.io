const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE': 
                return[
                ...state,
                action.expense
                ]; //se utiliza el spread operator (...Array) porque no queremos modificar el state, que se haria si utilizamos push
                   //e igual se agrega el nuevo array

        case 'REMOVE_EXPENSE':
            
                return state.filter(({id}) => id!==action.id);

        case 'EDIT_EXPENSE':
                return state.map((expense) => {
                    if ( action.id===expense.id ){
                        return {
                            ...expense, //de esta manera se hace spread object y se combina con otro object spreaded para colocar los updates, genio el que hizo esto
                            ...action.updates
                        }
                    } else {
                        return expense
                    }
                })  
                
        default: 
            return state;
    }
}

export default expensesReducer;