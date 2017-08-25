import React from 'react';
import { shallow } from 'enzyme';

import LabelInput from './label-input';

describe('LabelInput component', () => {
    test('has an input container with an input', () => {
        const labelInput = shallow(<LabelInput />);
        const input = labelInput.find('.input-container input');

        expect(input.prop('type')).toBe('text');
    });

    test('has an input with a placeholder text', () => {
        const labelInput = shallow(<LabelInput />);
        const input = labelInput.find('.input-container input');

        expect(input.prop('placeholder')).toBe('enter label...');
    });

    test('calls the provided onChange handler when input changes', () => {
        const onChange = jest.fn();
        const transactionId = 123;
        const labelInput = shallow(
            <LabelInput onChange={onChange} transactionId={transactionId} />
        );
        const input = labelInput.find('.input-container input');

        input.simulate('change', { target: { value: 'value' } });

        expect(onChange.mock.calls[0]).toEqual(['value']);
    });
});
