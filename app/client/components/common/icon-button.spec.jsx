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
        const iconButton = shallow(<IconButton text={iconText} />);
        const text = iconButton.find('button.button .text');

        expect(text.text()).toEqual(iconText);
    });

    test('has a button with the provided onClick handler', () => {
        const onClick = () => {};
        const iconButton = shallow(<IconButton onClick={onClick} />);
        const button = iconButton.find('button.button');

        expect(button.props().onClick).toEqual(onClick);
    });

    test('button has active class when isActive', () => {
        const iconButton = shallow(<IconButton isActive />);
        const button = iconButton.find('.button');

        expect(button.hasClass('active')).toBe(true);
    });

    test('button has provided class', () => {
        const classNameProp = 'classNameProp';
        const iconButton = shallow(<IconButton className={classNameProp} />);
        const button = iconButton.find('.button');

        expect(button.hasClass(classNameProp)).toBe(true);
    });
});
