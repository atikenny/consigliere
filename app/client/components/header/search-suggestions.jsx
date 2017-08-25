import React from 'react';
import PropTypes from 'prop-types';

const SearchSuggestions = ({ onItemClick, suggestions, isOpen }) => {
    let containerClassName = 'search-suggestions-container';

    if (isOpen) {
        containerClassName += ' open';
    }

    return (
        suggestions && (
            <div className={containerClassName}>
                    <ul className="suggestions">
                        {suggestions.map(suggestion => (
                            <li
                                key={suggestion}
                                className="item"
                                onClick={() => {
                                    onItemClick(suggestion);
                                }}>
                                {suggestion}
                            </li>
                        ))}
                    </ul>
            </div>
        ) || null
    );
};

export default SearchSuggestions;

SearchSuggestions.propTypes = {
    isOpen: PropTypes.bool,
    onItemClick: PropTypes.func,
    suggestions: PropTypes.array
};
