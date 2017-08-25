import React from 'react';
import { connect } from 'react-redux';

import {
    edit
} from 'actions/filter';
import {
    open,
    close,
    clearSelected
} from 'actions/suggestions';
import SearchInput from 'components/header/search-input';

const mapDispatch = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(edit(value));
            dispatch(clearSelected());
        },
        onFocus: () => {
            dispatch(open());
        },
        onBlur: () => {
            dispatch(close());
        }
    };
};

const mapState = ({ filter, suggestions }) => {
    return {
        filter,
        selectedSuggestion: suggestions.selectedSuggestion
    };
};

export default connect(mapState, mapDispatch)(SearchInput);
