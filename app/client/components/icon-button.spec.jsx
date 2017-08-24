import React from 'react';
import { shallow } from 'enzyme';

import IconButton from './icon-button';

describe('IconButton compoennt', () => {
    test('has a button with the provided icon type', () => {
        const iconType = 'iconType';
        const iconButton = shallow(<IconButton type={iconType} />);
        const icon = iconButton.find('button.button .icon');

        expect(icon.hasClass(iconType)).toBe(true);
    });

    test('has a button with the provided text', () => {
        const iconText = 'icon text';
        const iconButton = shallow(<IconButton type="" text={iconText} />);
        const text = iconButton.find('button.button .text');

        expect(text.text()).toEqual(iconText);
    });

    test('has a button with the provided onClick handler', () => {
        const onClick = () => {};
        const iconButton = shallow(<IconButton type="" onClick={onClick} />);
        const button = iconButton.find('button.button');

        expect(button.props().onClick).toEqual(onClick);
    });
});
