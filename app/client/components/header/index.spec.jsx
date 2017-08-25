import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header component', () => {
    test('has a header', () => {
        const SUT = shallow(<Header />);
        const header = SUT.find('header');

        expect(header.length).toBe(1);
    });

    test('has an h1', () => {
        const SUT = shallow(<Header />);
        const heading = SUT.find('header h1');

        expect(heading.text()).toBe('Consigliere');
    });

    test('has settings cog icon', () => {
        const SUT = shallow(<Header />);
        const cogIcon = SUT.find('.controllers IconButton');

        expect(cogIcon.prop('type')).toBe('cog');
    });
});
