import React from 'react';
import { shallow } from 'enzyme';

import TransactionItem from './transaction-item';
import * as dateService from 'services/date-service';

describe('TransactionItem component', () => {
    const render = ({
        amount = 0,
        currency = '',
        date = '',
        description
    } = {}) => shallow(
        <TransactionItem
            amount={amount}
            currency={currency}
            date={date}
            description={description} />
    );

    test('has a container with two rows', () => {
        const transactionItem = render();
        const container = transactionItem.find('.transaction-item');
        const rows = transactionItem.find('.transaction-item > .row');

        expect(container.length).toBe(1);
        expect(rows.length).toBe(2);
    });

    test('first row has the desc and formatted date', () => {
        dateService.formatDate = jest.fn(date => 'formatted date');
        const transactionItem = render({
            description: 'description',
            date: 'date'
        });
        const rows = transactionItem.find('.transaction-item > .row');
        const firstRow = rows.at(0);
        const description = firstRow.find('.description');
        const date = firstRow.find('.date');

        expect(description.text()).toBe('description');
        expect(date.text()).toBe('formatted date');
    });
});
