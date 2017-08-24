import React from 'react';
import { shallow } from 'enzyme';

import LabelItem from './label-item';

describe('LabelItem component', () => {
    const render = ({
        name = '',
        onClick = () => {}
    } = {}) => (
        shallow(
            <LabelItem name={name} onClick={onClick} />
        )
    );

    test('has a label item with the provided name', () => {
        const nameProp = 'name';
        const labelItem = render({ name: nameProp });
        const name = labelItem.find('.label .name');

        expect(name.text()).toBe(nameProp);
    });

    test('has a cross icon for deletion', () => {
        const labelItem = render();
        const iconButton = labelItem.find('.label IconButton');

        expect(iconButton.prop('type')).toBe('cross');
    });

    test('has a click handler on the cross icon', () => {
        const onClick = () => {};
        const labelItem = render({ onClick });
        const iconButton = labelItem.find('.label IconButton');

        expect(iconButton.prop('onClick')).toBe(onClick);
    });
});
