import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

describe('<ExpenseForm />', () => {
  it('renders with default values', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
  })

  it('sets description on input change', () => {
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
  })

  it('sets note on textarea change', () => {
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
      target: { value }
    })
    expect(wrapper.state('note')).toBe(value)
  })

  it('sets amount with valid input', () => {
    const value = '23.50'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    })
    expect(wrapper.state('amount')).toBe(value)
  })

  it(' doesn\'t set amount with invalid input', () => {
    const value = '12.122'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    })
    expect(wrapper.state('amount')).toBe('')
  })

  it('calls onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe(null)
    const { id, ...noID } = expenses[2]
    expect(onSubmitSpy).toHaveBeenCalledWith(noID)
  })

  it('sets a new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
  })

  it('sets calendarFocused on focus change', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper.state('calendarFocused')).toEqual(false)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual(focused)
  })
})