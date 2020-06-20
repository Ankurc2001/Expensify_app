import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilter from './ExpenseListFilter';
import { Connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
const ExpenseDashbordPage=()=>(
    <div>
        <ExpenseListFilter/>
        <ExpenseList/>
    </div>
);



export default ExpenseDashbordPage;