import React from 'react';
import { connect } from 'react-redux';

import { setNewLabelValue } from 'actions/transactions';
import LabelInput from 'components/label-input';

const mapDispatch = (dispatch) => {
    return {
        onChange: ({ id, value }) => {
            dispatch(setNewLabelValue(id, value));
        }
    };
};

export default connect(null, mapDispatch)(LabelInput);
