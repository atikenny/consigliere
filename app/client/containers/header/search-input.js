import React from 'react';
import { connect } from 'react-redux';

import { edit } from 'actions/filter';
import { setFilter } from 'actions/transactions';
import {
    open,
    close
} from 'actions/suggestions';
import SearchInput from 'components/header/search-input';

const mapDispatch = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(open());
            dispatch(edit(value));
        },
        onEnter: (filter) => {
            dispatch(setFilter(filter));
            dispatch(close());
        },
        onFocus: () => {
            dispatch(open());
        },
        onBlur: () => {
            dispatch(close());
        }
    };
};

const mapState = ({ filter }) => {
    return {
        filter
    };
};

export default connect(mapState, mapDispatch)(SearchInput);
