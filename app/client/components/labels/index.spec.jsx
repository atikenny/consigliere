import React from 'react';
import { shallow } from 'enzyme';

import Labels from './index';

import LabelItem from 'containers/labels/label-item';
import LabelInput from 'containers/labels/label-input';

describe('Labels component', () => {
    const render = ({
        isOpen = false,
        items = undefined,
        onClick = () => {},
        transactionId = '123'
    } = {}) => (
        shallow(
            <Labels
                isOpen={isOpen}
                items={items}
                onClick={onClick}
                transactionId={transactionId} />
        )
    );

    test('has a label container', () => {
        const isOpen = true;
        const labels = render({ isOpen });
        const container = labels.find('.labels-container');

        expect(container.length).toBe(1);
    });

    test('has a list', () => {
        const isOpen = true;
        const labels = render({ isOpen, items: [] });
        const list = labels.find('.labels');

        expect(list.length).toBe(1);
    });

    test('has a list of labels with the provided props', () => {
        const isOpen = true;
        const label1 = 'name1';
        const label2 = 'name2';
        const labelsProp = [label1, label2];
        const labels = render({ isOpen, items: labelsProp });
        const labelItems = labels.find(LabelItem);

        expect(labelItems.length).toBe(labelsProp.length);
        expect(labelItems.at(0).prop('name')).toEqual(label1);
        expect(labelItems.at(1).prop('name')).toEqual(label2);
    });

    test('has a label input', () => {
        const isOpen = true;
        const onClick = () => {};
        const transactionId = '123';
        const labels = render({ isOpen, transactionId, onClick });
        const labelInput = labels.find(LabelInput);

        expect(labelInput.prop('transactionId')).toBe(transactionId);
        expect(labelInput.prop('onClick')).toBe(onClick);
    });
});