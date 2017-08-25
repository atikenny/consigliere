import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import 'styles/components/header/search-input';
import Icon from 'components/icon';
import SearchSuggestions from 'containers/header/search-suggestions';

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        };

        this.throttledOnChange = throttle(event => {
            props.onChange(event.target.value);
        }, 200, { leading: false });
    }

    onChange(event) {
        // persist the event for later use: https://facebook.github.io/react/docs/events.html#event-pooling
        event.persist();

        this.throttledOnChange(event);
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return (
            <div className="search-container">
                <div className="input-icon-container">
                    <Icon type="search" />
                    <input
                        className="search-input"
                        type="text"
                        onFocus={this.props.onFocus}
                        onBlur={this.props.onBlur}
                        onChange={this.onChange.bind(this)}
                        value={this.props.selectedSuggestion || this.state.filter} />
                </div>
                <SearchSuggestions />
            </div>
        );
    }
}

export default SearchInput;

SearchInput.propTypes = {
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    filter: PropTypes.string,
    selectedSuggestion: PropTypes.string
};
