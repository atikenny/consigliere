import React from 'react';
import { shallow } from 'enzyme';

import Labels from './index';

import LabelItem from 'containers/labels/label-item';
import LabelInput from 'containers/labels/label-input';

describe('Labels component', () => {
    const render = ({
        labels = undefined,
        onClick = () => {},
        transactionId = '123'
    } = {}) => (
        shallow(
            <Labels
                onClick={onClick}
                labels={labels}
                transactionId={transactionId} />
        )
    );

    test('has a label container', () => {
        const labels = render();
        const container = labels.find('.labels-container');

        expect(container.length).toBe(1);
    });

    test('has a list', () => {
        const labels = render({ labels: [] });
        const list = labels.find('.labels');

        expect(list.length).toBe(1);
    });

    test('has a list of labels with the provided props', () => {
        const label1 = 'name1';
        const label2 = 'name2';
        const labelsProp = [label1, label2];
        const labels = render({ labels: labelsProp });
        const labelItems = labels.find(LabelItem);

        expect(labelItems.length).toBe(labelsProp.length);
        expect(labelItems.at(0).prop('name')).toEqual(label1);
        expect(labelItems.at(1).prop('name')).toEqual(label2);
    });

    test('has a label input', () => {
        const onClick = () => {};
        const transactionId = '123';
        const labels = render({ transactionId, onClick });
        const labelInput = labels.find(LabelInput);

        expect(labelInput.prop('transactionId')).toBe(transactionId);
        expect(labelInput.prop('onClick')).toBe(onClick);
    });
});