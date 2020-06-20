import React from 'react';
import { connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,RemoveExpense } from '../action/expenses';

const EditExpensePage=(props)=>{
    console.log(props);
    return(
        <div>
            <ExpenseForm 
            expense={props.expense}
            onSumited={(expense)=>{
                props.dispatch(editExpense( props.expense.id ,expense));
                props.history.push('/');
            }}
            />
            
            <button onClick={()=>{
                props.dispatch(RemoveExpense({id: props.expense.id}))
                props.history.push('/');
            }}>Remove</button>
        
        </div>
    );

};

const mapStateToProps = (state , props)=>{
    return{
        expense:state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);