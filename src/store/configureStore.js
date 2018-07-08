import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'  // have 3rd party imports before your own
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}

// store creation

// folder struktura taksna kot na levi strani:
// 1 actions folder
// 1 reducers folder
// 1 store folder ---> v njem je configureStore.js
// app.js === newTab.js
