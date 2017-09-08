import React from 'react';
import { shallow } from 'enzyme';

import Stats from './stats';

describe('Stats component', () => {
    test('has a stats container', () => {
        const SUT = shallow(<Stats labelsGroup={[]} />);
        const container = SUT.find('.stats-container');

        expect(container.length).toBe(1);
    });

    test('has a title heading', () => {
        const SUT = shallow(<Stats labelsGroup={[]} />);
        const title = SUT.find('.stats-container h2');

        expect(title.text()).toBe('Stats');
    });

    test('has a labels heading', () => {
        const SUT = shallow(<Stats labelsGroup={[]} />);
        const title = SUT.find('.stats-container h3');

        expect(title.text()).toBe('Labels');
    });

    test('lists the labels group', () => {
        const label = 'label';
        const amountSummary = 12.34;
        const itemCount = 123;
        const currency = 'currency';
        const labelsGroup = [{ label, amountSummary, itemCount }];
        const SUT = shallow(<Stats labelsGroup={labelsGroup} currency={currency} />);
        const list = SUT.find('.stats-container .labels-group');
        const firstItem = list.find('.item').at(0);
        const firstItemLabel = firstItem.find('.label');
        const firstItemAmount = firstItem.find('.amount-summary');
        const firstItemCount = firstItem.find('.item-count');

        expect(firstItemLabel.text()).toBe(label);
        expect(firstItemAmount.text()).toBe(`${currency} ${Math.round(amountSummary)}`);
        expect(firstItemCount.text()).toBe(`${itemCount}`);
    });
});
