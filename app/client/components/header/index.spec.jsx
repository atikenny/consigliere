import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

import SearchInput from 'containers/header/search-input';
import Controllers from 'containers/header/controllers';

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

    test('has a search input', () => {
        const SUT = shallow(<Header />);
        const searchInput = SUT.find(SearchInput);

        expect(searchInput.length).toBe(1);
    });

    test('has the controllers', () => {
        const SUT = shallow(<Header />);
        const controllers = SUT.find(Controllers);

        expect(controllers.length).toBe(1);
    });
});
