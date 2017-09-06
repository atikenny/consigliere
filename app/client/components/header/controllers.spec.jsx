import React from 'react';
import { shallow } from 'enzyme';

import Controllers from './controllers';

describe('Controllers component', () => {
    test('has controller icons', () => {
        const SUT = shallow(<Controllers />);
        const icons = SUT.find('.controllers IconButton');
        const labelsIcon = icons.find('[type="price-tags"]');
        const statsIcon = icons.find('[type="stats-dots"]');

        expect(labelsIcon.length).toBe(1);
        expect(statsIcon.length).toBe(1);
    });

    test('calls show labels when labels icon is clicked and labels is inactive', () => {
        const showLabels = () => {};
        const SUT = shallow(<Controllers showLabels={showLabels} />);
        const labelsIcon = SUT.find('.controllers IconButton[type="price-tags"]');

        expect(labelsIcon.prop('onClick')).toBe(showLabels);
    });

    test('calls hide labels when labels icon is clicked and labels is active', () => {
        const hideLabels = () => {};
        const SUT = shallow(<Controllers isLabelsActive hideLabels={hideLabels} />);
        const labelsIcon = SUT.find('.controllers IconButton[type="price-tags"]');

        expect(labelsIcon.prop('onClick')).toBe(hideLabels);
    });

    test('calls show stats when stats icon is clicked and stats is inactive', () => {
        const showStats = () => {};
        const SUT = shallow(<Controllers showStats={showStats} />);
        const statsIcon = SUT.find('.controllers IconButton[type="stats-dots"]');

        expect(statsIcon.prop('onClick')).toBe(showStats);
    });

    test('calls hide stats when stats icon is clicked and stats is active', () => {
        const hideStats = () => {};
        const SUT = shallow(<Controllers isStatsActive hideStats={hideStats} />);
        const statsIcon = SUT.find('.controllers IconButton[type="stats-dots"]');

        expect(statsIcon.prop('onClick')).toBe(hideStats);
    });
});
