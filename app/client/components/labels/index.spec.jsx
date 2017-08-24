import React from 'react';
import { shallow } from 'enzyme';

import Labels from './index';

describe('Labels component', () => {
    const render = ({
        labels = undefined,
        onClick = () => {},
        transactionId = 123
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
        const labels = render();
        const list = labels.find('.labels');

        expect(list.length).toBe(1);
    });

    test('has a list of labels with the provided props', () => {
        const label1 = 'name1';
        const label2 = 'name2';
        const labelsProp = [label1, label2];
        const labels = render({ labels: labelsProp });
        const labelItems = labels.find('li > LabelItem');

        expect(labelItems.length).toBe(labelsProp.length);
        expect(labelItems.at(0).prop('name')).toEqual(label1);
        expect(labelItems.at(1).prop('name')).toEqual(label2);
    });

    test('has a plus icon button for adding labels', () => {
        const onClick = () => {};
        const labels = render({ onClick });
        const iconButton = labels.find('IconButton');

        expect(iconButton.prop('type')).toBe('plus');
        expect(iconButton.prop('onClick')).toBe(onClick);
    });

    test('has a label input', () => {
        const transactionId = 123;
        const labels = render({ transactionId });
        const labelInput = labels.find('LabelInput');

        expect(labelInput.prop('transactionId')).toBe(transactionId);
    });
});