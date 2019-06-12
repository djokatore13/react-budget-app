import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expensesAction';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          // console.log(expense);
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
}

const mapSetToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapSetToProps)(EditExpensePage);