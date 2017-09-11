import React from 'react';
import { shallow } from 'enzyme';

import SubMenu from './sub-menu';

describe('SubMenu component', () => {
    test('does NOT render sub menu when show is false', () => {
        const SUT = shallow(<SubMenu />);
        const subMenu = SUT.find('sub-menu-container');

        expect(subMenu.length).toBe(0);
    });
});
