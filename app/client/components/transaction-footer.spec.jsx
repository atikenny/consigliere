import React from 'react';
import { shallow } from 'enzyme';

import TransactionFooter from './transaction-footer';

describe('TransactionFooter component', () => {
    test('has a transaction footer', () => {
        const transactionFooter = shallow(<TransactionFooter />);
        const footer = transactionFooter.find('.footer');

        expect(footer.length).toBe(1);
    });

    test('has a price tag icon', () => {
        const transactionFooter = shallow(<TransactionFooter />);
        const iconButton = transactionFooter.find('IconButton');

        expect(iconButton.prop('type')).toBe('price-tags');
    });
});