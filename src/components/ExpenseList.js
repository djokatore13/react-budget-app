import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/visibleExpenses';

export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-tablet">Expense</div>
      <div className="show-for-tablet">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">       
            No expenses
          </div>
        ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);

// Moze i ovako ali nije patern koji pratimo(uobicajno)
// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList);

// export default ConnectedExpenseList;