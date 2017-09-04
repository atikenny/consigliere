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

    test('has labels icon', () => {
        const SUT = shallow(<Header />);
        const labelsIcon = SUT.find('.controllers IconButton');

        expect(labelsIcon.prop('type')).toBe('price-tags');
    });

    test('calls toggle labels when labels icon is clicked', () => {
        const toggleLabels = () => {};
        const SUT = shallow(<Header toggleLabels={toggleLabels} />);
        const labelsIcon = SUT.find('.controllers IconButton');

        expect(labelsIcon.prop('onClick')).toBe(toggleLabels);
    });
});
