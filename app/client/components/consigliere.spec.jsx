import React from 'react';
import { shallow } from 'enzyme';

import Consigliere from './consigliere';

import Header from 'containers/header';
import Content from 'containers/content';
import Transactions from 'containers/transactions';
import Notification from 'containers/common/notification';
import Modal from 'containers/common/modal';

describe('Consigliere component', () => {
    test('has a container with an id', () => {
        const consigliere = shallow(<Consigliere />);
        const container = consigliere.find('#consigliere');

        expect(container.length).toBe(1);
    });

    test('has a header component', () => {
        const consigliere = shallow(<Consigliere />);
        const header = consigliere.find(Header);

        expect(header.length).toBe(1);
    });

    test('has a content component', () => {
        const consigliere = shallow(<Consigliere />);
        const content = consigliere.find(Content);

        expect(content.length).toBe(1);
    });

    test('has transactions component', () => {
        const consigliere = shallow(<Consigliere />);
        const transactions = consigliere.find(Transactions);

        expect(transactions.length).toBe(1);
    });

    test('has notification component', () => {
        const consigliere = shallow(<Consigliere />);
        const notification = consigliere.find(Notification);

        expect(notification.length).toBe(1);
    });

    test('has modal component', () => {
        const consigliere = shallow(<Consigliere />);
        const modal = consigliere.find(Modal);

        expect(modal.length).toBe(1);
    });
});
