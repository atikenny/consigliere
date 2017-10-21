import React from 'react';
import { shallow } from 'enzyme';

import SubMenu from './sub-menu';

describe('SubMenu component', () => {
    test('show a sub menu', () => {
        const SUT = shallow(<SubMenu />);
        const subMenu = SUT.find('.sub-menu-container');

        expect(subMenu.length).toBe(1);
    });

    test('has show class when show is true', () => {
        const SUT = shallow(<SubMenu show />);
        const subMenu = SUT.find('.sub-menu-container');

        expect(subMenu.hasClass('show')).toBe(true);
    });

    test('has a sort by date button', () => {
        const SUT = shallow(<SubMenu />);
        const button = SUT.find('Button');

        expect(button.prop('text')).toBe('Sort by date');
    });
});
