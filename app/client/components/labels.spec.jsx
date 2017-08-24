import React from 'react';
import { shallow } from 'enzyme';

import Labels from './labels';

describe('Labels component', () => {
    test('has a label container', () => {
        const labels = shallow(<Labels />);
        const container = labels.find('.labels-container');

        expect(container.length).toBe(1);
    });

    test('has a list', () => {
        const labels = shallow(<Labels />);
        const list = labels.find('.labels');

        expect(list.length).toBe(1);
    });

    test('has a plus icon button for adding labels', () => {
        const labels = shallow(<Labels />);
        const iconButton = labels.find('IconButton');

        expect(iconButton.prop('type')).toBe('plus');
    });

    test('has a list of labels with the provided props', () => {
        const label1 = 'name1';
        const label2 = 'name2';
        const labelsProp = [label1, label2];
        const labels = shallow(<Labels labels={labelsProp} />);
        const labelItems = labels.find('li > LabelItem');

        expect(labelItems.length).toBe(labelsProp.length);
        expect(labelItems.at(0).prop('name')).toEqual(label1);
        expect(labelItems.at(1).prop('name')).toEqual(label2);
    });
});