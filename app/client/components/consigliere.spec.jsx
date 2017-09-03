import React from 'react';
import { shallow } from 'enzyme';

import Consigliere from './consigliere';

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
        const consigliere = shallow(<Consigliere />);
        const transactions = consigliere.find('Transactions');

        expect(transactions.length).toBe(1);
    });

    test('has notification component', () => {
        const consigliere = shallow(<Consigliere />);
        const notification = consigliere.find('Notification');

        expect(notification.length).toBe(1);
    });
});
