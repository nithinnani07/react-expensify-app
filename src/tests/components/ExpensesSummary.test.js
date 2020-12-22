import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary text with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render summary text with many expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={235001} />);
    expect(wrapper).toMatchSnapshot();
});