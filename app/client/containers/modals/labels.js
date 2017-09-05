import { connect } from 'react-redux';

import Labels from 'components/modals/labels';
import {
    getLabels,
    getFilteredTransactionsCount
} from 'selectors/transactions';
import { addLabelMultiple } from 'actions/transactions';
import { toggle } from 'actions/modal';
import { show } from 'actions/notification';

const mapState = (state) => {
    const itemCount = getFilteredTransactionsCount(state);
    const labels = getLabels(state).sort();

    return {
        itemCount,
        labels
    };
};

const mapDispatch = (dispatch) => {
    return {
        addLabel: (label) => {
            dispatch(addLabelMultiple(label));
            dispatch(toggle('labels'));
            dispatch(show(`Label added: ${label}`));
        }
    }
};

export default connect(mapState, mapDispatch)(Labels);
