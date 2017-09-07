import React from 'react';
import { shallow } from 'enzyme';

import InputIconButton from './input-icon-button';

describe('InputIconButton component', () => {
    test('has container with text input and icon button', () => {
        const SUT = shallow(<InputIconButton />);
        const inputIconButton = SUT.find('.input-icon-button');
        const textInput = inputIconButton.find('input[type="text"]');
        const iconButton = inputIconButton.find('IconButton');

        expect(textInput.length).toBe(1);
        expect(iconButton.length).toBe(1);
    });

    test('input has the provided attributes', () => {
        const onChange = () => {};
        const onKeyDown = () => {};
        const SUT = shallow(
            <InputIconButton
                inputClassName="input-class-name"
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder="placeholder" />
        );
        const input = SUT.find('input');

        expect(input.prop('className')).toBe('input-class-name');
        expect(input.prop('onChange')).toBe(onChange);
        expect(input.prop('onKeyDown')).toBe(onKeyDown);
        expect(input.prop('placeholder')).toBe('placeholder');
    });

    test('icon button has the provided attributes', () => {
        const onClick = () => {};
        const SUT = shallow(
            <InputIconButton isActive buttonType='button-type' onClick={onClick} />
        );
        const iconButton = SUT.find('IconButton');

        expect(iconButton.prop('isActive')).toBe(true);
        expect(iconButton.prop('type')).toBe('button-type');
        expect(iconButton.prop('onClick')).toBe(onClick);
    });
});
