import React from 'react';
import { shallow } from 'enzyme';

import Modal from './modal';

describe('Modal component', () => {
    test('renders container when show is true', () => {
        const SUT = shallow(<Modal show />);
        const modal = SUT.find('.modal-container');

        expect(modal.length).toBe(1);
    });

    test('does NOT render anything when show is false', () => {
        const SUT = shallow(<Modal />);
        const modal = SUT.find('.modal-container');

        expect(modal.length).toBe(0);
    });

    test('renders labels component when page is selected', () => {
        const SUT = shallow(<Modal show page="labels" />);
        const labels = SUT.find('Labels');

        expect(labels.length).toBe(1);
    });

    test('renders stats component when page is selected', () => {
        const SUT = shallow(<Modal show page="stats" />);
        const labels = SUT.find('Stats');

        expect(labels.length).toBe(1);
    });
});
