import React from 'react';
import { shallow } from 'enzyme';

import Modal from './modal';

describe('Modal component', () => {
    test('shows the provided children', () => {
        const SUT = shallow(
            <Modal>
                <div className="show-me" />
            </Modal>
        );
        const showMe = SUT.find('.show-me');

        expect(showMe.length).toBe(1);
    });
});
