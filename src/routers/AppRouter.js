import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
            <Route path="/create" component={AddExpense}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
        </BrowserRouter>
);

export default AppRouter;