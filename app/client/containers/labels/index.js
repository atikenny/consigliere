import { connect } from 'react-redux';

import { addLabel } from 'actions/labels';
import Labels from 'components/labels';

const mapState = ({ labels }, { transactionId }) => {
    const labelState = labels.find(label => label.id === transactionId);
    const isOpen = labelState && labelState.isOpen;
    const items = labelState && labelState.items;

    return {
        isOpen,
        items
    };
};

const mapDispatch = (dispatch, { transactionId }) => {
    return {
        onClick: () => {
            dispatch(addLabel(transactionId));
        }
    };
};

export default connect(mapState, mapDispatch)(Labels);
