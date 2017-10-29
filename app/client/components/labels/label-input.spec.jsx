import React from 'react';
import { shallow } from 'enzyme';

import LabelInput from './label-input';

describe('LabelInput component', () => {
    describe('has an input icon button', () => {
        test('with plus button type', () => {
            const labelInput = shallow(<LabelInput />);
            const inputIconButton = labelInput.find('InputIconButton');

            expect(inputIconButton.prop('buttonType')).toBe('plus');
        });

        test('with a placeholder text', () => {
            const labelInput = shallow(<LabelInput />);
            const inputIconButton = labelInput.find('InputIconButton');

            expect(inputIconButton.prop('placeholder')).toBe('enter label...');
        });

        test('with the provided on click handler', () => {
            const onClick = () => {};
            const labelInput = shallow(<LabelInput onClick={onClick} />);
            const inputIconButton = labelInput.find('InputIconButton');

            expect(inputIconButton.prop('onClick')).toBe(onClick);
        });

        test('calls the provided onChange handler when input changes', () => {
            const onChange = jest.fn();
            const transactionId = 123;
            const labelInput = shallow(
                <LabelInput onChange={onChange} transactionId={transactionId} />
            );
            const inputIconButton = labelInput.find('InputIconButton');

            inputIconButton.simulate('change', { target: { value: 'value' } });

            expect(onChange).toHaveBeenCalledWith('value');
        });
    });
});
