import React from 'react';
import { shallow } from 'enzyme';

import Notification from './notification';

describe('Notification component', () => {
    test('has the provided text', () => {
        const text = 'text';
        const SUT = shallow(<Notification notification={text} />);
        const notification = SUT.find('.notification');

        expect(notification.text()).toBe(text);
    });

    test('renders nothing when no text is provided', () => {
        const SUT = shallow(<Notification />);
        const notification = SUT.find('.notification');

        expect(notification.length).toBe(0);
    });
});
