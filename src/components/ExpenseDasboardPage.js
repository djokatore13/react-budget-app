import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
// import { BrowserRouter, Route, Switch, NavLink, NavNavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
}

export default ExpenseDashboardPage;