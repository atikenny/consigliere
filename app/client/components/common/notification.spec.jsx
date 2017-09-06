import React from 'react';
import { shallow } from 'enzyme';

import Notification from './notification';

describe('Notification component', () => {
    test('has the provided text', () => {
        const text = 'text';
        const SUT = shallow(<Notification text={text} />);
        const notification = SUT.find('.notification');
        const show = SUT.find('.notification.show');

        expect(notification.text()).toBe(text);
        expect(show.length).toBe(0);
    });

    test('adds show class when it is true', () => {
        const SUT = shallow(<Notification show />);
        const notification = SUT.find('.notification.show');

        expect(notification.length).toBe(1);
    });
});
