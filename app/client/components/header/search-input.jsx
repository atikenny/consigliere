import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/header/search-input';
import IconButton from 'components/common/icon-button';
import SearchSuggestions from 'containers/header/search-suggestions';
import { onSpecificKey } from 'services/keyboard-service';

const SearchInput = ({ onBlur, onChange, onFocus, filter, search, suggestionId }) => (
    <div className="search-container">
        <div className="input-icon-container">
            <input
                className="search-input"
                type="text"
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onSpecificKey('Enter', () => {
                    search(filter);
                })}
                onChange={(event) => {
                    onChange(event.target.value);
                }}
                value={filter} />
            <IconButton type="search" onClick={() => {
                search(filter);
            }} />
        </div>
        <SearchSuggestions suggestionId={suggestionId} />
    </div>
);

export default SearchInput;

SearchInput.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    filter: PropTypes.string,
    search: PropTypes.func,
    suggestionId: PropTypes.string
};
