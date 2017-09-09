import React from 'react';
import { shallow } from 'enzyme';

import Transactions from './index';

describe('Transactions component', () => {
    const getMockTransaction = (() => {
        let index = 0;

        return ({ withLabels } = {}) => {
            const newIndex = index++;
            const mockTransaction = {
                id: `${newIndex}`,
                amount: newIndex,
                currency: `currency${newIndex}`,
                date: `date${newIndex}`,
                isLabelsOpen: withLabels
            };

            if (withLabels) {
                mockTransaction.labels = ['label1', 'label2'];
            }

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
        const transactionItems = transactions.find('ul > li > TransactionItem');

        expect(transactionItems.length).toBe(transactionsProp.length);
    });

    test('has a list of transaction footers', () => {
        const transactionsProp = [
            getMockTransaction(), getMockTransaction()
        ];
        const transactions = shallow(<Transactions transactions={transactionsProp} />);
        const container = transactions.find('.transactions-container');
        const transactionFooters = transactions.find('ul > li > TransactionFooter');

        expect(transactionFooters.length).toBe(transactionsProp.length);
    });

    test('has a list of labels', () => {
        const transactionMock1 = getMockTransaction();
        const transactionMock2 = getMockTransaction({ withLabels: true });
        const transactionsProp = [
            transactionMock1, transactionMock2
        ];
        const transactions = shallow(<Transactions transactions={transactionsProp} />);
        const container = transactions.find('.transactions-container');
        const labelsContainers = transactions.find('ul > li > Labels');

        expect(labelsContainers.length).toBe(1);
        expect(labelsContainers.at(0).prop('labels')).toBe(transactionMock2.labels);
        expect(labelsContainers.at(0).prop('transactionId')).toBe(transactionMock2.id);
    });
});
