import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import 'styles/components/header/search-input';
import Icon from 'components/icon';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.throttledOnChange = throttle(event => {
            props.onChange(event.target.value);
        }, 200, { leading: false });
    }

    onChange(event) {
        // persist the event for later use: https://facebook.github.io/react/docs/events.html#event-pooling
        event.persist();

        this.throttledOnChange(event);
    }

    render() {
        return (
            <div className="search-container">
                <Icon type="search" />
                <input
                    className="search-input"
                    type="text"
                    onChange={this.onChange.bind(this)} />
            </div>
        );
    }
}

export default SearchInput;

SearchInput.propTypes = {
    onChange: PropTypes.func
};
