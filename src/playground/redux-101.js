import { createStore } from 'redux';

// Action generator - function that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy // isto sto i incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state;
  }
};

const store = createStore(countReducer);

// const unsubscribe = store.subscribe(() => {
//   console.log(store.getState());
// });
store.subscribe(() => {
  console.log(store.getState());
});


// Action(object that get send to the store)
// Increment
// Decrement
// Reset
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
// kada stavimo subscribe u varijablu i pozovemo tu var. negde, prekidamo izvrsenje ostalih slucajeva
// ovde ce se izvrsiti samo prvi increment(ostala 3 slucaja nece)
// unsubscribe(); 

store.dispatch(resetCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 3
// });
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(setCount({ count: 1001 }));
