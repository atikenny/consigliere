import React from 'react';
import { shallow } from 'enzyme';

import Labels from './labels';

describe('Labels component', () => {
    test('has labels modal container', () => {
        const SUT = shallow(<Labels labels={[]} />);
        const container = SUT.find('.labels-modal-container');

        expect(container.length).toBe(1);
    });

    test('has a title heading', () => {
        const SUT = shallow(<Labels labels={[]} />);
        const title = SUT.find('.labels-modal-container h2.title');

        expect(title.text()).toBe('Choose a label to apply:');
    });

    test('has a list of labels', () => {
        const labels = ['label 1'];
        const addLabel = jest.fn();
        const SUT = shallow(<Labels labels={labels} addLabel={addLabel} />);
        const labelsList = SUT.find('.labels-modal-container .labels');
        const labelItems = labelsList.find('.item');
        const firstLabel = labelItems.at(0);
        const firstButton = firstLabel.find('Button');

        expect(labelsList.length).toBe(1);
        expect(firstButton.prop('isFullSize')).toBe(true);
        expect(firstButton.prop('text')).toBe(labels[0]);

        // WHEN
        firstButton.simulate('click');

        // THEN
        expect(addLabel.mock.calls[0]).toEqual([labels[0]]);
    });

    test('has an item count heading', () => {
        const itemCount = 123;
        const SUT = shallow(<Labels labels={[]} itemCount={itemCount} />);
        const itemCountHeading = SUT.find('.labels-modal-container h2.item-count');

        expect(itemCountHeading.text()).toBe(`The label will be applied to: ${itemCount} items.`);
    });
});
