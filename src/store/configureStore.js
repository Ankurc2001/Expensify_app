import {createStore , combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import fliterRedux from '../reducers/filter';

export default ()=>{
    const store= createStore(
        combineReducers({
            expenses:expensesReducer,
            filter:fliterRedux
        }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};