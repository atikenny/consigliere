import { connect } from 'react-redux';

import { deleteLabel } from 'actions/labels';
import LabelItem from 'components/labels/label-item';

const mapDispatch = (dispatch, { transactionId, name }) => {
    return {
        onClick: () => {
            dispatch(deleteLabel(transactionId, name));
        }
    };
};

export default connect(null, mapDispatch)(LabelItem);
