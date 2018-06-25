

// set text filter action
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
  })
  
  // set sort by date filter action
  export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  })
  
  // set sort by amount filter action
  export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  })
  
  // set start date filter action
  export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
  })
  
  // set end date filter action
  export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
  })