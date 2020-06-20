import React from 'react';
import { BrowserRouter , Route , Switch}  from 'react-router-dom';
import Header from '../Components/Header';
import AddExpensePage from '../Components/AddExpensePage';
import EditExpensePage from '../Components/EditExpensePage';
import ExpenseDashbordPage  from '../Components/ExpenseDashbordPage';
import  HelpExpensePage  from '../Components/HelpExpenesePage';
import NotFoundPage from '../Components/NotFoundPage'

const AppRouter =()=>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
     <Route path='/' component={ExpenseDashbordPage}  exact={true}/>
     <Route path='/create' component={AddExpensePage} />
     <Route path='/edit/:id' component={EditExpensePage}/>
     <Route path='/help' component={HelpExpensePage} />
     <Route component={NotFoundPage}/>
     </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter
