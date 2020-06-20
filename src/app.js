import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouters';
import { addExpense } from './action/expenses';
import { setTextFilter} from './action/filter';
import getVisibleExpense from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount : 500}));
store.dispatch(addExpense({description: 'Gas bill',}));
store.dispatch(addExpense({description: 'Rent', amount : 1000}));

const state = store.getState();

const VisibleExpense = getVisibleExpense(state.expenses,state.filter);

console.log(VisibleExpense);

const jsx =(
    <Provider store={store} >
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));
    