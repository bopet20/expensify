import filtersReducer from '../../reducers/filters'
import moment from 'moment'

describe('filter reducer', () => {
  it('sets up default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    })
  })

  it('sets sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
  })

  it('sets sortBy to date', () =>{
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }

    const action = { type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
  })

  it('sets the text filter', () => {
    const currentState = {
      text: '',
      sortBy: 'date',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }

    const action = {
      type: 'SET_TEXT_FILTER',
      text: 'test'
    }
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe('test')
  })

  it('sets the startDate filter', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }

    const action = {
      type: 'SET_START_DATE',
      startDate: moment().startOf('month').add(3, 'days')
    }
    const state = filtersReducer(currentState, action)
    expect(state.startDate).toEqual(moment().startOf('month').add(3, 'days'))
  })

  it('sets the endDate filter', () => {
    const currentState = {
      text: '',
      sortBy: 'amount',
      startDate: moment().startOf('month'),
      endDate: moment().endOf('month')
    }

    const action = {
      type: 'SET_END_DATE',
      endDate: moment().endOf('month').subtract(3, 'days')
    }
    const state = filtersReducer(currentState, action)
    expect(state.endDate).toEqual(moment().endOf('month').subtract(3, 'days'))
  })
})