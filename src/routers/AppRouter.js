import React from 'react';
import {Router, Route, Switch,} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpense from '../components/AddExpense';
import EditExpensePage from '../components/EditExpense';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import LoginPage from '../components/LoginPage';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/> 
            <PrivateRoute path="/create" component={AddExpense}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
            <PrivateRoute path="/help" component={HelpPage}/>
            <PrivateRoute component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;