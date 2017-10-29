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

    test('calls the provided toggle labels on click', () => {
        const toggleLabels = jest.fn();
        const transactionFooter = shallow(<TransactionFooter toggleLabels={toggleLabels} />);
        const iconButton = transactionFooter.find('IconButton');

        iconButton.simulate('click');

        expect(toggleLabels).toHaveBeenCalled();
    });

    test('shows similar count button when it is higher than zero', () => {
        const similarCount = 123;
        const onSimilarCountClick = () => {};
        const transactionFooter = shallow(<TransactionFooter similarCount={similarCount} onSimilarCountClick={onSimilarCountClick} />);
        const similarCountButton = transactionFooter.find('Button');

        expect(similarCountButton.prop('text')).toBe(`${similarCount} similar`);
        expect(similarCountButton.prop('onClick')).toBe(onSimilarCountClick);
    });
});