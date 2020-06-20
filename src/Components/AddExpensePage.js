import React from 'react';
import ExpenseForm  from './ExpenseForm';
import { connect} from 'react-redux';
import {addExpense } from '../action/expenses';

const AddExpensePage=(props)=>(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm
    onSumited={(Expense)=>{
        console.log(Expense)
        props.dispatch(addExpense(Expense));
        props.history.push('/');
        
    }}
    />
    </div>
);

export default connect()(AddExpensePage);