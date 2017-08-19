import React from 'react';
import { shallow } from 'enzyme';

import LabelItem from './label-item';

describe('LabelItem component', () => {
    test('has a label item with the provided name', () => {
        const labelItem = shallow(<LabelItem name="name" />);
        const label = labelItem.find('div.label');

        expect(label.hasClass('label')).toBe(true);
        expect(label.text()).toBe('name');
    });
});
