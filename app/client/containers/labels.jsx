import React from 'react';
import { connect } from 'react-redux';

import { addLabel } from 'actions/transactions';
import Labels from 'components/labels';

const mapDispatch = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(addLabel(ownProps.transactionId, ownProps.newLabelValue));
        }
    };
};

export default connect(null, mapDispatch)(Labels);
