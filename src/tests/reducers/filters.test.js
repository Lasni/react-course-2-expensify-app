import filtersReducer from '../../reducers/filters'
import moment from 'moment'

// init
test('should set up default filter values', () => {
  const action = { type: '@@INIT' }
  const state = filtersReducer(undefined, action)
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

// should set amount filter
test('should set sortBy to amount', () => {
  const action = {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  }
  const state = filtersReducer(undefined, action)
  expect(state.sortBy).toBe('amount')
})

// should set date filter
test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'not date'
  }
  const action = {
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  }
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

// should set text filter
test('should set text filter', () => {
  const text = 'This is my text'
  const action = {
    type: 'SET_TEXT_FILTER',
    text: text
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe(text)
})

// should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment()
  const action = {
    type: 'SET_START_DATE',
    startDate: startDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

// should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment()
  const action = {
    type: 'SET_END_DATE',
    endDate: endDate
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})