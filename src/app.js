import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expensesAction';
import { setTextFilter} from './actions/filtersAction';
import getVisibleEspenses from './selectors/visibleExpenses';
import 'normalize.css/normalize.css';
import './css/style.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill')); 
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleEspenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));