import React from 'react';
import { connect } from 'react-redux';

import { edit } from 'actions/filter';
import SearchInput from 'components/header/search-input';

const mapDispatch = (dispatch) => {
    return {
        onChange: (value) => {
            dispatch(edit(value));
        }
    };
};

export default connect(null, mapDispatch)(SearchInput);
