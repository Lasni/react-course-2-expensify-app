
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
import { startSetExpenses } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase'
// import './playground/promises'
import LoadingPage from './components/LoadingPage'



const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}



ReactDOM.render(<LoadingPage />, document.getElementById('app'));




firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})


// store.dispatch(addExpense({ description: 'water bill', amount: 4500 }))
// store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }))
// store.dispatch(addExpense({ description: 'rent', amount: 109500 }))

// store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'))
// }, 3000)

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)


// console.log(store.getState())