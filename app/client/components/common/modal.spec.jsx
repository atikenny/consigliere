import React from 'react';
import { shallow } from 'enzyme';

import Modal from './modal';

describe('Modal component', () => {
    test('shows the provided children', () => {
        const renderChildren = () => (
            <div className="show-me" />
        );
        const SUT = shallow(
            <Modal children={renderChildren} />
        );
        const showMe = SUT.find('.show-me');

        expect(showMe.length).toBe(1);
    });

    test('does NOT render anything when no children are provided', () => {
        const SUT = shallow(
            <Modal />
        );
        const children = SUT.find('*');

        expect(children.length).toBe(0);
    });
});
