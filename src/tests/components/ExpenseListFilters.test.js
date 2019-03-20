import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { defaultFilters, testFilters } from '../fixtures/filters'

describe('<ExpenseListFilters />', () => {
  let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

  beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
      <ExpenseListFilters
        filters={defaultFilters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />)
  })

  it('renders correctly with defaults', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly with data', () => {
    wrapper.setProps({
      filters: testFilters
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('handles text filter changes', () => {
    const value = 'New text'
    wrapper.find('input').simulate('change', {
      target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
  })

  it('sorts by date', () => {
    const value = 'date'
    wrapper.setProps({
      filters: testFilters
    })
    wrapper.find('select').simulate('change', {
      target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
  })

  it('sorts by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
      target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
  })

  it('handles date changes', () => {
    const startDate = moment(0)
    const endDate = moment(0)
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')(startDate, endDate)
    expect(setStartDate).toHaveBeenCalled()
    expect(setEndDate).toHaveBeenCalled()
  })

  it('handles date focus changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
  })
})
