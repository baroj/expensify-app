import React from 'react';
import ExpenserForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>AddExpense</h1>
                <ExpenserForm
                    onSubmit={this.onSubmit}
                />
            </div>
            );
    }
}


const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense)=>dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpense);