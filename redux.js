import { createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';








store.subscribe(()=>{
    const state  = store.getState();
    const visibleExpense= getVisibleExpense(state.expenses,state.filter);
    console.log(visibleExpense);
})

 const expenseOne = store.dispatch(addExpense({description:'Rent',amount:200,createAt: 400}))
 const expenseTwo = store.dispatch(addExpense({description:'Coffe',amount:300,createAt:390}))

// store.dispatch(RemoveExpense({id: expenseOne.expenses.id}))
// store.dispatch(editExpense(expenseTwo.expenses.id ,{amount: 500} ))

// store.dispatch(setTextFilter('Rent'))

 store.dispatch(sortByAmount())
store.dispatch(sortByDate())  

//store.dispatch(setStartDate(0))
//store.dispatch(setEndDate(1250))


const demoState ={
    expenses:[{
        id: 'qwdehvdfbjnk',
        description:'March Rent',
        note:'This was the final payment',
        amount: 64000,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'anount',
        startDate:undefined,
        endDate:undefined
    }
}