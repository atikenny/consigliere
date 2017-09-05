import React from 'react';
import { shallow } from 'enzyme';

import Content from './content';

describe('Content component', () => {
    test('shows container', () => {
        const SUT = shallow(<Content />);
        const content = SUT.find('.content');

        expect(content.length).toBe(1);
    });

    test('has modal class when modal is active', () => {
        const SUT = shallow(<Content isModalShown />);
        const content = SUT.find('.content');

        expect(content.hasClass('modal')).toBe(true);
    });
});
