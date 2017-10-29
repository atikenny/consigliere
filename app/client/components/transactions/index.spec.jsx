import React from 'react';
import { shallow } from 'enzyme';

import Transactions from './index';

import TransactionItem from 'containers/transactions/transaction-item';
import TransactionFooter from 'containers/transactions/transaction-footer';
import Labels from 'containers/labels';

describe('Transactions component', () => {
    const getMockTransaction = (() => {
        let index = 0;

        return () => {
            const newIndex = index++;
            const mockTransaction = {
                id: `${newIndex}`,
                amount: newIndex,
                currency: `currency${newIndex}`,
                date: `date${newIndex}`
            };

            return mockTransaction;
        };
    })();

    test('has a container', () => {
        const transactions = shallow(<Transactions />);
        const container = transactions.find('.transactions-container');
        const list = transactions.find('ul');

        expect(container.length).toBe(1);
        expect(list.length).toBe(0);
    });

    test('has a list of transaction items', () => {
        const transactionsProp = [
            getMockTransaction(), getMockTransaction()
        ];
        const transactions = shallow(<Transactions transactions={transactionsProp} />);
        const container = transactions.find('.transactions-container');
        const transactionItems = transactions.find(TransactionItem);

        expect(transactionItems.length).toBe(transactionsProp.length);
    });

    test('has a list of transaction footers', () => {
        const transactionsProp = [
            getMockTransaction(), getMockTransaction()
        ];
        const transactions = shallow(<Transactions transactions={transactionsProp} />);
        const container = transactions.find('.transactions-container');
        const transactionFooters = transactions.find(TransactionFooter);

        expect(transactionFooters.length).toBe(transactionsProp.length);
    });

    test('has a Labels component', () => {
        const transactionMock1 = getMockTransaction();
        const transactionMock2 = getMockTransaction();
        const transactionsProp = [
            transactionMock1, transactionMock2
        ];
        const transactions = shallow(<Transactions transactions={transactionsProp} />);
        const container = transactions.find('.transactions-container');
        const labelsContainers = transactions.find(Labels);

        expect(labelsContainers.length).toBe(2);
        expect(labelsContainers.at(0).prop('transactionId')).toBe(transactionMock1.id);
        expect(labelsContainers.at(1).prop('transactionId')).toBe(transactionMock2.id);
    });
});
