import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouters';
import { addExpense } from './action/expenses';
import { setTextFilter} from './action/filter';
import getVisibleExpense from './selectors/expenses';

const store = configureStore();
  
const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );


ReactDOM.render(jsx , document.getElementById('app'));
    