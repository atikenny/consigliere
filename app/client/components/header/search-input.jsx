import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header/search-input';
import Icon from 'components/icon';
import SearchSuggestions from 'containers/header/search-suggestions';
import { onSpecificKey } from 'services/keyboard-service';

const SearchInput = ({ onBlur, onChange, onEnter, onFocus, filter }) => (
    <div className="search-container">
        <div className="input-icon-container">
            <Icon type="search" />
            <input
                className="search-input"
                type="text"
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onSpecificKey('Enter', () => {
                    onEnter(filter);
                })}
                onChange={(event) => {
                    onChange(event.target.value);
                }}
                value={filter} />
        </div>
        <SearchSuggestions />
    </div>
);

export default SearchInput;

SearchInput.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    onFocus: PropTypes.func,
    filter: PropTypes.string
};
