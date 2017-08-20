import React from 'react';
import { shallow } from 'enzyme';

import Consigliere from './consigliere';
import Transactions from './transactions';
import * as TransactionsContainer from '../containers/transactions';

describe('Consigliere component', () => {
    test('has a container with an id', () => {
        const consigliere = shallow(<Consigliere />);
        const container = consigliere.find('#consigliere');

        expect(container.length).toBe(1);
    });

    test('has a file input', () => {
        const consigliere = shallow(<Consigliere />);
        const fileInput = consigliere.find('FileInput');

        expect(fileInput.length).toBe(1);
    });

    test('has transactions component', () => {
        // overwrite container with component
        TransactionsContainer.default = Transactions;

        const consigliere = shallow(<Consigliere />);
        const transactions = consigliere.find('Transactions');

        expect(transactions.length).toBe(1);
    });
});
