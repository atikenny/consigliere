import React from 'react';
import PropTypes from 'prop-types';

import 'styles/components/common/suggestions';

const getContainerClassName = (isOpen) => {
    let containerClassName = 'suggestions-container';

    if (isOpen) {
        containerClassName += ' open';
    }

    return containerClassName;
};

const Suggestions = ({ isOpen, onItemClick, suggestions }) => (
    suggestions ? (
        <div className={getContainerClassName(isOpen)}>
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
    ) : null
);

export default Suggestions;

Suggestions.propTypes = {
    isOpen: PropTypes.bool,
    onItemClick: PropTypes.func,
    suggestions: PropTypes.array
};
