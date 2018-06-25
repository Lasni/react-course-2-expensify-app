import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count: count
})

const resetCount = () => ({
  type: 'RESET'
})

// REDUCERS
// 1. reducers are pure functions
// 2. never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {

    case 'INCREMENT': return { count: state.count + action.incrementBy }

    case 'DECREMENT': return { count: state.count - action.decrementBy }
    // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    case 'SET': return { count: action.count }

    case 'RESET': return { count: 0 }
    default: return state
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState())
})

console.log(store.getState());

// // increment
// store.dispatch({
//   type: 'INCREMENT'
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

// // decrement
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }))

// // reset
// store.dispatch({
//   type: 'RESET'
// });
store.dispatch(resetCount())

store.dispatch(setCount({ count: 100 }))