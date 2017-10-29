import React from 'react';
import { shallow } from 'enzyme';

import SearchInput from './search-input';

import * as keyboardService from 'services/keyboard-service';
import SearchSuggestions from 'containers/header/search-suggestions';

describe('Seacrh Input component', () => {
    describe('input', () => {
        test('has a text input', () => {
            const SUT = shallow(<SearchInput />);
            const input = SUT.find('.search-container .input-icon-container .search-input');

            expect(input.prop('type')).toBe('text');
        });

        test('has the provided value', () => {
            const value = 'value';
            const SUT = shallow(<SearchInput filter={value} />);
            const input = SUT.find('.search-container .input-icon-container .search-input');

            expect(input.prop('value')).toBe(value);
        });

        test('attaches the provided onBlur and onFocus handlers', () => {
            const onBlur = () => {};
            const onFocus = () => {};
            const SUT = shallow(
                <SearchInput
                    onBlur={onBlur}
                    onFocus={onFocus} />
            );
            const input = SUT.find('.search-container .input-icon-container .search-input');

            expect(input.prop('onBlur')).toBe(onBlur);
            expect(input.prop('onFocus')).toBe(onFocus);
        });

        test('calls search on enter keydown', () => {
            let triggerEnterHandler;
            keyboardService.onSpecificKey = jest.fn((key, handler) => {
                if (key === 'Enter') {
                    triggerEnterHandler = handler;
                }
            });
            const filter = 'filter';
            const search = jest.fn();
            const SUT = shallow(
                <SearchInput
                    search={search}
                    filter={filter} />
            );
            const input = SUT.find('.search-container .input-icon-container .search-input');

            input.simulate('keyDown', {
                key: 'Enter'
            });
            triggerEnterHandler();

            expect(search).toHaveBeenCalledWith(filter);
        });

        test('calls the provided onChange with the new input value', () => {
            const value = 'value';
            const onChange = jest.fn();
            const SUT = shallow(<SearchInput onChange={onChange} />);
            const input = SUT.find('.search-container .input-icon-container .search-input');

            input.simulate('change', { target: { value } });

            expect(onChange).toHaveBeenCalledWith(value);
        });
    });

    test('has an search icon button', () => {
        const SUT = shallow(
            <SearchInput />
        );
        const iconButton = SUT.find('.search-container .input-icon-container IconButton');

        expect(iconButton.prop('type')).toBe('search');
    });

    test('calls search when the search button is clicked', () => {
        const filter = 'filter';
        const search = jest.fn();
        const SUT = shallow(
            <SearchInput search={search} filter={filter} />
        );
        const iconButton = SUT.find('.search-container .input-icon-container IconButton');

        iconButton.simulate('click');

        expect(search).toHaveBeenCalledWith(filter);
    });

    test('has search suggestions', () => {
        const suggestionId = 'suggestionId';
        const SUT = shallow(<SearchInput suggestionId={suggestionId} />);
        const suggestions = SUT.find(SearchSuggestions);

        expect(suggestions.prop('suggestionId')).toBe(suggestionId);
    });
});
