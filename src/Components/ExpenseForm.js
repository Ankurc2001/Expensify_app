import React from 'react';
import momemt from 'moment';
import 'react-dates/initialize';
import {  SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = momemt();

console.log(now.format('MMM Do , YYYY'));

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            description: props.expense? props.expense.description : '',
            note:props.expense? props.expense.note:'',
            amount:props.expense? props.expense.amount: '',
            createdAt:props.expense? momemt(props.expense.createdAt) :momemt(),
            Calanderfocused:false,
            id:'',
            error:''
            
        };
    }
    onDescriptionChange=(e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    };

    onNoteChange=(e)=>{
        const note = e.target.value;
        this.setState(()=>({ note }));
    };
    
    onAmountChange=(e)=>{
        const amount = e.target.value;
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };
    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
        
    };
    onFocusChange=({ focused })=>{
        this.setState(()=>({ Calanderfocused:focused }))
    };
    onSubmit=(e)=>{
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            const error='Please provide all details in the form'
            this.setState(()=>({error}))
        }else{
            this.setState(()=>({ error:'' }));
            this.props.onSumited({
                description: this.state.description,
                amount : this.state.amount,
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            })
        }
    };

    render(){
        return(
            <div>
            {this.state.error}
            <form onSubmit={this.onSubmit}>
            <input
            type="text"
            autoFocus  
            placeholder='Description'
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <input
            type="text"
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.Calanderfocused} 
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=> false}
            />
            <textarea 
            placeholder="add expense for your expenses(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            >
            </textarea>
            <button>Add Expense</button>
            </form>
            </div>
        )
    }
}; 