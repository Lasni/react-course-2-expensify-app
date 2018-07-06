import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

// default
test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

// should remove expense
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

// should not remove expense if id not found
test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// should add an expense
test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense // es6 shorthand for expense: expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

// should edit an expense
test('should edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

// should not edit expense if expense not found
test('should not edit an expense', () => {
  const amount = 122000
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

// should set expenses
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[1]
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses[1])
})
