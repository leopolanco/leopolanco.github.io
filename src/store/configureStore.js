import {combineReducers, createStore} from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filter'


//store creation

export default () => {
    const store = createStore( //con esta funcion se crea el store
        combineReducers({ //con esta se combinan los reducers que van a formar el store
            expenses: expensesReducer, 
            filter:filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //para activar la extension de chrome redux devtools
    );
    return store;
};

