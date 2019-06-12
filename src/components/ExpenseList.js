import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/visibleExpenses';

const ExpenseList = (props) => (
  <div>
    <h2>Espense List</h2>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  }
}

export default connect(
  mapStateToProps
)(ExpenseList);

// Moze i ovako ali nije patern koji pratimo(uobicajno)
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

// export default ConnectedExpenseList;