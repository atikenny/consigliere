import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

import SearchInput from 'containers/header/search-input';
import Controllers from 'containers/header/controllers';
import SubMenu from 'containers/header/sub-menu';

describe('Header component', () => {
    test('has a header', () => {
        const SUT = shallow(<Header />);
        const header = SUT.find('header');

        expect(header.length).toBe(1);
    });

    test('has a menu icon button', () => {
        const toggleMenu = () => {};
        const SUT = shallow(<Header toggleMenu={toggleMenu} />);
        const iconButton = SUT.find('header IconButton');

        expect(iconButton.prop('type')).toBe('menu');
        expect(iconButton.hasClass('menu-button')).toBe(true);
        expect(iconButton.prop('onClick')).toBe(toggleMenu);
    });

    test('has a search input', () => {
        const SUT = shallow(<Header />);
        const searchInput = SUT.find(SearchInput);

        expect(searchInput.length).toBe(1);
        expect(searchInput.prop('suggestionId')).toBe('header-search');
    });

    test('has the controllers', () => {
        const SUT = shallow(<Header />);
        const controllers = SUT.find(Controllers);

        expect(controllers.length).toBe(1);
    });

    test('has the controllers', () => {
        const SUT = shallow(<Header />);
        const subMenu = SUT.find(SubMenu);

        expect(subMenu.length).toBe(1);
    });
});
