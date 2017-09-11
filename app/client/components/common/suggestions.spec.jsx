import React from 'react';
import { shallow } from 'enzyme';

import Suggestions from './suggestions';

describe('Suggestions component', () => {
    test('does NOT render suggestions when they are empty', () => {
        const SUT = shallow(<Suggestions />);
        const suggestions = SUT.find('.suggestions-container');

        expect(suggestions.length).toEqual(0);
    });

    test('renders list when suggestions are provided', () => {
        const SUT = shallow(<Suggestions suggestions={[]} />);
        const suggestionsList = SUT.find('.suggestions-container .suggestions');

        expect(suggestionsList.length).toEqual(1);
    });

    test('renders list with open class when is open', () => {
        const SUT = shallow(<Suggestions suggestions={[]} isOpen />);
        const container = SUT.find('.suggestions-container.open');

        expect(container.length).toEqual(1);
    });

    test('renders list items for suggestions', () => {
        const suggestions = ['suggestion 1', 'suggestion 2'];
        const SUT = shallow(<Suggestions suggestions={suggestions} />);
        const suggestionItems = SUT.find('.suggestions-container .suggestions .item');

        expect(suggestionItems.length).toEqual(suggestions.length);
    });

    test('calls provided handler when item is clicked', () => {
        const onItemClick = jest.fn();
        const suggestions = ['suggestion 1', 'suggestion 2'];
        const SUT = shallow(
            <Suggestions suggestions={suggestions} onItemClick={onItemClick} />
        );
        const suggestionItems = SUT.find('.suggestions-container .suggestions .item');
        const secondItem = suggestionItems.at(1);

        secondItem.simulate('click');

        expect(onItemClick.mock.calls[0]).toEqual(['suggestion 2']);
    });
});
