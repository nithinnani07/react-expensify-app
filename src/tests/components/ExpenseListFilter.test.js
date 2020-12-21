import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilter'
import { filters, altFilters } from '../fixtures/filters';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    wrapper.find('input').simulate('change', {
        target: { value: 'bill' }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should sortByDate correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
});

test('should sortByAmount correctly', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
});

test('should handle date changes correctly', () => {
    const startDate = moment().add(1, 'days');
    const endDate = moment().add(10, 'days');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes correctly', () => {
    const calendarFocused = 'end date';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});