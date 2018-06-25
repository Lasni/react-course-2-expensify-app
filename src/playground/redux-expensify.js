import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ACTIONS //

// add expense action
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
})

// remove expense action
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
})

// edit expense action
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates
})

// set text filter action
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text: text
})

// set sort by date filter action
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// set sort by amount filter action
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// set start date filter action
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate: startDate
})

// set end date filter action
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate: endDate
})

// REDUCERS //

// expenses reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates }
        }
        else {
          return expense
        }
      })
    default:
      return state
  }
}

// filters reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    default:
      return state
  }
}

// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1 // if true, b comes first (return 1), else a comes first (return -1)
    }
    else if (sortBy = 'amount') {
      return a.amount < b.amount ? 1 : -1 // if true, b comes first (return 1), else a comes first (return -1)
    }
  })
}

// STORE //

// store creation
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 5, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 10 }))

store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

const demoState = {
  expenses: [{
    id: 'kfsajkl',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 54500, // in pennies
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: 'Jen',
  age: 24
}

console.log({
  ...user,
  location: 'Ljubljana'
})