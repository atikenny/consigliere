import React from 'react';
import { shallow } from 'enzyme';

import Button from './button';

describe('Button component', () => {
    test('has the provided text', () => {
        const text = 'text';
        const SUT = shallow(<Button text={text} />);
        const button = SUT.find('.button');

        expect(button.text()).toEqual(text);
    });

    test('has the provided click handler', () => {
        const onClick = () => {};
        const SUT = shallow(<Button onClick={onClick} />);
        const button = SUT.find('.button');

        expect(button.prop('onClick')).toBe(onClick);
    });
});
