import { connect } from 'react-redux';

import {
    addLabel,
    setNewLabelValue
} from 'actions/labels';
import LabelInput from 'components/labels/label-input';

const mapDispatch = (dispatch, ownProps) => {
    const id = ownProps.transactionId;

    return {
        onChange: (value) => {
            dispatch(setNewLabelValue(id, value));
        },
        onEnter: () => {
            dispatch(addLabel(id));
        }
    };
};

export default connect(null, mapDispatch)(LabelInput);
