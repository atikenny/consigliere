import { connect } from 'react-redux';

import { deleteLabel } from 'actions/transactions';
import LabelItem from 'components/labels/label-item';

const mapDispatch = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(deleteLabel(ownProps.transactionId, ownProps.name));
        }
    };
};

export default connect(null, mapDispatch)(LabelItem);
