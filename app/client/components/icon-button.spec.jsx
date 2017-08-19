import React from 'react';
import { shallow } from 'enzyme';

import IconButton from './icon-button';

describe('IconButton compoennt', () => {
    test('has a button with the provided icon type', () => {
        const iconType = 'iconType';
        const iconButton = shallow(<IconButton type={iconType} />);
        const button = iconButton.find('button.icon.button');

        expect(button.length).toEqual(1);
        expect(button.hasClass(iconType)).toBe(true);
    });

    test('has a button with the provided text', () => {
        const iconText = 'icon text';
        const iconButton = shallow(<IconButton type="" text={iconText} />);
        const button = iconButton.find('button.icon.button');

        expect(button.text()).toEqual(iconText);
    });
});
