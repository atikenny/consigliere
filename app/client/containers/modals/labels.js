import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import {
    getLabels,
    getFilteredTransactionsCount
} from 'selectors/transactions';
import { addLabelMultiple } from 'actions/transactions';

const mapState = (state) => {
    const itemCount = getFilteredTransactionsCount(state);
    const labels = getLabels(state);

    return {
        itemCount,
        labels
    };
};

const mapDispatch = (dispatch) => {
    return {
        addLabel: (label) => {
            dispatch(addLabelMultiple(label));
        }
    }
};

export default connect(mapState, mapDispatch)(Labels);
