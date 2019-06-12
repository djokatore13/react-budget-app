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

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));